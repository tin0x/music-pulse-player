export const createToken = () => ({
  id: crypto.randomUUID(),
  validityPeriod: Date.now() * 24 * 60 * 60 * 1000,
});
