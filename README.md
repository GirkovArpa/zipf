# Zipf

Link random pairs of paperclips in a pool then observe the distribution of chain lengths.  

Does it follow **Zipf's Law?**

Inspired by [this](https://www.youtube.com/watch?v=fCn8zs912OE) **Vsauce** video.

# Usage
Since this is a TypeScript project, you can run it immediately without manual compilation using **Deno**:
```
$ deno run zipf.ts
```
```javascript
const pool: number[][] = linkRandPairs(10, 5); 
const result: number[] = pool.map(toLength).sort(numerically);
console.log({ result });
// { result: [ 1, 1, 1, 2, 5 ] }
```