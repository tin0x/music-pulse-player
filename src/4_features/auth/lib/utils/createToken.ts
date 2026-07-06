const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export const createToken = () => ({
  id: crypto.randomUUID(),
  validityPeriod: Date.now() + ONE_DAY_MS,
});
