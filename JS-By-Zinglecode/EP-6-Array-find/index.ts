interface typeScores {
  [index: number]: number;
}
const scoresF: typeScores = [82, 75, 48, 64, 36];

const failedScore = scoresF.find((score) => {
  return score < 50;
});

console.log(failedScore);
