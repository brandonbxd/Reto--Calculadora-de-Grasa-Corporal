export const bodyFatPercentage = (isMen, Measures) => {
  if (isMen) {
    return (
      495 /
        (1.0324 -
          0.19077 * Math.log10(Measures.cintura - Measures.cuello) +
          0.15456 * Math.log10(Measures.altura)) -
      450
    );
  }
  return (
    495 /
      (1.29579 -
        0.35004 *
          Math.log10(Measures.cintura + Measures.cadera - Measures.cuello) +
        0.221 * Math.log10(Measures.altura)) -
    450
  );
};
