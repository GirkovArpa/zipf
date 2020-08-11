'use strict';

const sample = (pool: number[][]): number[] =>
  pool[~~(pool.length * Math.random())];

const makePool = (clips: number): number[][] =>
  Array.from({ length: clips }, () => ([0]));

const notEqualTo = (clipA: number[]) =>
  (clipB: number[]): boolean => clipA !== clipB;

const notIncludedIn = (blacklist: number[][]) =>
  (element: number[]): boolean =>
    !blacklist.includes(element);

const toLength = ({ length }: { length: number }): number => length;
const numerically = (a: number, b: number): number => a - b;

const linkRandPair = (pool: number[][]): number[][] => {
  if (pool.length === 1) throw new Error("Can't link 2 clips from pool of 1.");
  const clipA: number[] = sample(pool);
  const clipB: number[] = sample(pool.filter(notEqualTo(clipA)));
  const clipC: number[] = clipA.concat(clipB);
  const poolSansAB: number[][] = pool.filter(notIncludedIn([clipA, clipB]));
  const poolB: number[][] = [...poolSansAB, clipC];
  return poolB;
}

const linkRandPairs = (
  poolSize: number,
  iterations: number,
  pool: number[][] = makePool(poolSize)
): number[][] => {
  return (iterations === 0)
    ? pool
    : linkRandPairs(poolSize, iterations - 1, linkRandPair(pool));
}

const pool: number[][] = linkRandPairs(10, 5); 
const result: number[] = pool.map(toLength).sort(numerically);
console.log({ result });