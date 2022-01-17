import type { RevealResult, WagerResult, CommitmentResult } from "./results";
declare type VerifyResult = Error | void;
export default function verifyReveal(commitmentResult: CommitmentResult | undefined, wagers: AsyncIterable<WagerResult>, revealResult: RevealResult): Promise<VerifyResult>;
export {};
