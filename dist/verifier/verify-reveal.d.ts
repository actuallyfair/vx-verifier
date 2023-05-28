import type { RevealResult, WagerResult, CommitmentResult } from "./results";
type VerifyResult = Error | void;
export default function verifyReveal(commitmentResult: CommitmentResult | undefined, wagers: AsyncIterable<WagerResult>, revealResult: RevealResult): Promise<VerifyResult>;
export {};
