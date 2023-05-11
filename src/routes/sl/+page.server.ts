export async function load() {
  return {
    title: 'Server Load Function Loaded',
    bi: BigInt(123n),
    date: new Date(),
    map: new Map(),
    regex: /([a-z])\w+/g
  };
}
