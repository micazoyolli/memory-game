export const generateCards = (pairCount: number) => {
  const base = import.meta.env.BASE_URL;
  const monsterPaths = Array.from({ length: 18 }, (_, i) => `${base}assets/monsters/${i + 1}.svg`);
  const selected = monsterPaths.slice(0, pairCount);

  const duplicated = [...selected, ...selected].map((monster, i) => ({
    id: i % pairCount,
    monster,
  }));

  return duplicated.sort(() => Math.random() - 0.5);
};