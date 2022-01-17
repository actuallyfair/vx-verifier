import { Client, types } from "pg";
import { parse as parseConfig } from "pg-connection-string";
import { assert } from "tsafe";

// parse all bigint's as `number`
types.setTypeParser(20, function (val) {
  const r = Number.parseInt(val, 10);
  assert(r >= Number.MIN_SAFE_INTEGER);
  assert(r <= Number.MAX_SAFE_INTEGER);
  return r;
});

export async function withClient<T>(
  connectionString: string,
  f: (c: Client) => Promise<T>
) {
  const config: any = parseConfig(connectionString);
  const client = new Client(config);
  await client.connect();

  try {
    return await f(client);
  } catch (err) {
    console.error("withClient caught error: ", err);
    throw err;
  } finally {
    await client.end();
  }
}

export async function connect(connectionString: string) {
  const config: any = parseConfig(connectionString);
  const client = new Client(config);
  await client.connect();
  return client;
}
