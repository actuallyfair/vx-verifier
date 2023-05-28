import QueryStream from "pg-query-stream";
import * as db from "./lib/db";
import {
  CommitmentResult,
  WagerResult,
  RevealResult,
} from "./verifier/results";
import verifyReveal from "./verifier/verify-reveal";

console.log("Welcome to the verifier for Verified by Provably Honest (tm)");

const connectionString = "postgres://logger:verysecurepassword@localhost/ken";

export async function main() {
  const revealClient = await db.connect(connectionString);
  const wagersClient = await db.connect(connectionString);

  const revealResultStream = await revealClient.query(
    new QueryStream(
      `SELECT gs_hash, gs_secret, created, verifier_secret
       FROM reveals
       ORDER BY created ASC`
    )
  );

  for await (const revealResult of revealResultStream as AsyncIterable<RevealResult>) {
    console.log("Checking reveal of: ", revealResult.gs_hash.toString("hex"));

    const commitmentQueryResult = await wagersClient.query(
      `SELECT gs_hash, gs_epoch, created, verifier_hash
      FROM commitments WHERE gs_hash=$1`,
      [revealResult.gs_hash]
    );

    const commitmentResult: undefined | CommitmentResult =
      commitmentQueryResult.rows[0];

    const wagerResults = await wagersClient.query(
      new QueryStream(
        `SELECT nonce, wager, wager_kind, created, wager_hash
         FROM wagers WHERE gs_hash=$1
         ORDER BY nonce ASC, created ASC`,
        [revealResult.gs_hash]
      )
    );

    const res = await verifyReveal(
      commitmentResult,
      wagerResults,
      revealResult
    );

    wagerResults.destroy(); // burn though so we can reuse the client..

    console.error(res);
  }

  revealClient.end();
  wagersClient.end();
}
main();
