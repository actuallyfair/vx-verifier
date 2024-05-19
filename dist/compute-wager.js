"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computePlinkoHouseEdge = exports.computePlinkoPascalsProbabilities = exports.computePlinkoPath = exports.computePinkoPossibilityIndexFromPath = exports.computeMinesMultiplier = exports.computeMineLocations = exports.computeMultiRouletteResult = exports.computeCrashDiceResult = exports.computeCrashResult = exports.computeFairCoinTossOutcome = exports.computeFairCoinTossResult = void 0;
const sha256_1 = require("@noble/hashes/sha256");
const hmac_1 = require("@noble/hashes/hmac");
const utils_1 = require("@noble/curves/abstract/utils");
const currency_1 = require("./generated/currency");
const fair_coin_toss_1 = require("./generated/message-contexts/fair-coin-toss");
const utils_2 = require("@noble/hashes/utils");
function computeFairCoinTossResult(sig) {
    // We're going to hash the signature just to really be sure its fairly distributed
    const hash = (0, sha256_1.sha256)(sig);
    const result = hash[0] % 2;
    if (result == 0) {
        return fair_coin_toss_1.FairCoinToss_Choice.HEADS;
    }
    else {
        return fair_coin_toss_1.FairCoinToss_Choice.TAILS;
    }
}
exports.computeFairCoinTossResult = computeFairCoinTossResult;
function computeFairCoinTossOutcome(sig, w) {
    const result = computeFairCoinTossResult(sig);
    const win = w.playerChoice === result;
    const profit = win ? 1 : -1;
    return {
        result,
        playerProfit: { currency: currency_1.Currency.CURRENCY_UNSPECIFIED, amount: profit },
    };
}
exports.computeFairCoinTossOutcome = computeFairCoinTossOutcome;
function doComputeCrashResult(hash, houseEdge) {
    const nBits = 52;
    const hashHex = (0, utils_2.bytesToHex)(hash);
    const seed = hashHex.slice(0, nBits / 4);
    const r = Number.parseInt(seed, 16);
    let X = r / 2 ** nBits; // uniformly distributed in [0; 1)
    let Y = 1 - X; // Now it's uniformly distributed in (0; 1], so it's safe to divide by it
    let result = (1 - houseEdge) / Y;
    result = Math.floor(result * 100) / 100;
    result = Math.max(1, result);
    return result;
}
function computeCrashResult(vxSignature, gameHash, // This is the hash of the next from the hash chain
houseEdge = 0) {
    return doComputeCrashResult((0, hmac_1.hmac)(sha256_1.sha256, vxSignature, gameHash), houseEdge);
}
exports.computeCrashResult = computeCrashResult;
function computeCrashDiceResult(sig, houseEdge) {
    return doComputeCrashResult((0, sha256_1.sha256)(sig), houseEdge);
}
exports.computeCrashDiceResult = computeCrashDiceResult;
// returns the index of which roulette outcome was picked
function computeMultiRouletteResult(vxSignature, bet) {
    const hash = (0, sha256_1.sha256)(vxSignature);
    const nBits = 52;
    const hashHex = (0, utils_2.bytesToHex)(hash);
    const seed = hashHex.slice(0, nBits / 4);
    const n = Number.parseInt(seed, 16);
    const v = n / 2 ** nBits; // uniform in [0; 1)
    let probabilitySum = 0;
    for (let i = 0; i < bet.outcomes.length; i++) {
        probabilitySum += bet.outcomes[i].probability;
        if (v < probabilitySum) {
            return i;
        }
    }
}
exports.computeMultiRouletteResult = computeMultiRouletteResult;
function computeMineLocations(vxSignature, revealedCells, // tiles we know are safe
cells, // how many cells in total
mines // how many mines there are going to be in total
) {
    let mineLocations = new Set();
    for (let m = 0; m < mines; m++) {
        const cellsLeft = cells - revealedCells.size - mineLocations.size;
        if (cellsLeft <= 0) {
            console.warn("Trying to place more mines than there are available locations.");
            break;
        }
        let mineIndex = Number((0, utils_1.bytesToNumberBE)(vxSignature) % BigInt(cellsLeft));
        let adjustedIndex = 0;
        for (let i = 0; i < cells; i++) {
            if (revealedCells.has(i) || mineLocations.has(i))
                continue;
            if (adjustedIndex === mineIndex) {
                mineLocations.add(i);
                break;
            }
            adjustedIndex++;
        }
    }
    return mineLocations;
}
exports.computeMineLocations = computeMineLocations;
// This tell the multiplier if they were alive on turn move
function computeMinesMultiplier(mines, // how many mines in the game
cells, // how many cells in total in the game
turn, // which turn they have finished
houseEdge = 0.01) {
    if (!Number.isSafeInteger(turn) || turn < 0) {
        throw new Error("Turn must be an integer >= 0");
    }
    // On the 0th bet, they have made:
    let accum = 1 - houseEdge;
    // all the turns  are effectively 0 edge
    for (let t = 1; t <= turn; t++) {
        const loseProb = mines / (cells - t + 1);
        const winProb = 1 - loseProb;
        // EV formula tells us [for betting 1 unit]
        // as it's 0 house edge
        // 0 == winProb * profit - loseProb
        // rearranged:
        const profit = loseProb / winProb;
        const multplier = 1 + profit;
        // and we need to stack it on top of their last bet:
        accum *= multplier;
    }
    return Math.floor(accum * 100) / 100;
}
exports.computeMinesMultiplier = computeMinesMultiplier;
// Return the index of the possibility that was picked by this path
// note that for a path of N, there should always be N+1 possibilities
function computePinkoPossibilityIndexFromPath(path) {
    let index = path.length / 2;
    for (const direction of path) {
        if (direction === "L") {
            index -= 0.5;
        }
        else if (direction === "R") {
            index += 0.5;
        }
        else {
            const _ = direction;
            throw new Error("unrecognized direction: ", direction);
        }
    }
    return index;
}
exports.computePinkoPossibilityIndexFromPath = computePinkoPossibilityIndexFromPath;
// return a path (saying 'L' or 'R', where 'L' means go left, and 'R' means going right)
//  of possibilities-1 length
function computePlinkoPath(vxSignature, possibilities) {
    if (!Number.isSafeInteger(possibilities) ||
        possibilities < 2 ||
        possibilities > 256) {
        throw new Error("invalid possibilities ");
    }
    const hash = (0, sha256_1.sha256)(vxSignature);
    let n = (0, utils_1.bytesToNumberBE)(hash);
    let ret = [];
    for (let i = 0; i < possibilities - 1; i++) {
        ret.push(n % 2n == 0n ? "R" : "L");
        n >>= 1n;
    }
    return ret;
}
exports.computePlinkoPath = computePlinkoPath;
function computePlinkoPascalsProbabilities(rowNumber) {
    if (rowNumber === 0)
        return [];
    if (rowNumber === 1)
        return [1];
    let lastRow = [];
    for (let row = 1; row <= rowNumber; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            }
            else {
                arr.push(lastRow[col - 1] + lastRow[col]);
            }
        }
        lastRow = arr;
    }
    let sum = 0;
    for (const v of lastRow) {
        sum += v;
    }
    return lastRow.map((v) => v / sum);
}
exports.computePlinkoPascalsProbabilities = computePlinkoPascalsProbabilities;
function computePlinkoHouseEdge(possibilities) {
    const odds = computePlinkoPascalsProbabilities(possibilities.length);
    let ev = 1; // you start off by betting everything
    for (let i = 0; i < possibilities.length; i++) {
        ev -= possibilities[i] * odds[i];
    }
    return ev;
}
exports.computePlinkoHouseEdge = computePlinkoHouseEdge;
