export const generateCards = (pairCount: number) => {
  const monsterPaths = Object.entries(import.meta.glob<string>('../assets/monsters/*.svg', {
    eager: true,
    import: 'default',
    query: '?url',
  }))
    .sort(([firstPath], [secondPath]) => {
      const firstIndex = Number(firstPath.match(/\/(\d+)\.svg$/)?.[1]);
      const secondIndex = Number(secondPath.match(/\/(\d+)\.svg$/)?.[1]);

      return firstIndex - secondIndex;
    })
    .map(([, monster]) => monster);
  const selected = monsterPaths.slice(0, pairCount);

  const duplicated = [...selected, ...selected].map((monster, i) => ({
    id: i % pairCount,
    monster,
  }));

  return duplicated.sort(() => Math.random() - 0.5);
};
