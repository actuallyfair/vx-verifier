"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.withClient = void 0;
const pg_1 = require("pg");
const pg_connection_string_1 = require("pg-connection-string");
const tsafe_1 = require("tsafe");
// parse all bigint's as `number`
pg_1.types.setTypeParser(20, function (val) {
    const r = Number.parseInt(val, 10);
    (0, tsafe_1.assert)(r >= Number.MIN_SAFE_INTEGER);
    (0, tsafe_1.assert)(r <= Number.MAX_SAFE_INTEGER);
    return r;
});
async function withClient(connectionString, f) {
    const config = (0, pg_connection_string_1.parse)(connectionString);
    const client = new pg_1.Client(config);
    await client.connect();
    try {
        return await f(client);
    }
    catch (err) {
        console.error("withClient caught error: ", err);
        throw err;
    }
    finally {
        await client.end();
    }
}
exports.withClient = withClient;
async function connect(connectionString) {
    const config = (0, pg_connection_string_1.parse)(connectionString);
    const client = new pg_1.Client(config);
    await client.connect();
    return client;
}
exports.connect = connect;
