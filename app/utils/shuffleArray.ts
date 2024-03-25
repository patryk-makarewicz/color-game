export const shuffleArray = <T>(array: T[]): T[] => {
  return array.map((item) => ({ ...item })).sort(() => Math.random() - 0.5);
};
