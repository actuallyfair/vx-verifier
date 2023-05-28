/// <reference types="node" />
export type CommitmentResult = {
    gs_hash: Buffer;
    gs_epoch: number;
    created: Date;
    verifier_hash: Buffer;
};
export type WagerResult = {
    nonce: number;
    wager: unknown;
    wager_kind: number;
    created: Date;
    wager_hash: Buffer;
};
export type RevealResult = {
    gs_hash: Buffer;
    gs_secret: Buffer;
    created: Date;
    verifier_secret: Buffer;
};
