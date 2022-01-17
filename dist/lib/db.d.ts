import { Client } from "pg";
export declare function withClient<T>(connectionString: string, f: (c: Client) => Promise<T>): Promise<T>;
export declare function connect(connectionString: string): Promise<Client>;
