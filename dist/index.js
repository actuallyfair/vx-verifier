"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const pg_query_stream_1 = __importDefault(require("pg-query-stream"));
const db = __importStar(require("./lib/db"));
const verify_reveal_1 = __importDefault(require("./verifier/verify-reveal"));
console.log("Welcome to the verifier for Verified by Provably Honest (tm)");
const connectionString = "postgres://logger:verysecurepassword@localhost/ken";
async function main() {
    const revealClient = await db.connect(connectionString);
    const wagersClient = await db.connect(connectionString);
    const revealResultStream = await revealClient.query(new pg_query_stream_1.default(`SELECT gs_hash, gs_secret, created, verifier_secret
       FROM reveals
       ORDER BY created ASC`));
    for await (const revealResult of revealResultStream) {
        console.log("Checking reveal of: ", revealResult.gs_hash.toString("hex"));
        const commitmentQueryResult = await wagersClient.query(`SELECT gs_hash, gs_epoch, created, verifier_hash
      FROM commitments WHERE gs_hash=$1`, [revealResult.gs_hash]);
        const commitmentResult = commitmentQueryResult.rows[0];
        const wagerResults = await wagersClient.query(new pg_query_stream_1.default(`SELECT nonce, wager, wager_kind, created, wager_hash
         FROM wagers WHERE gs_hash=$1
         ORDER BY nonce ASC, created ASC`, [revealResult.gs_hash]));
        const res = await (0, verify_reveal_1.default)(commitmentResult, wagerResults, revealResult);
        wagerResults.destroy(); // burn though so we can reuse the client..
        console.error(res);
    }
    revealClient.end();
    wagersClient.end();
}
exports.main = main;
main();
