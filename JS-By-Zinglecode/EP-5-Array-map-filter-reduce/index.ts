const scores: number[] = [82, 75, 48, 64, 36];

const passFailScoresR = scores.reduce((sum, score) => {
  return sum + score;
});

console.log("reduce", scores);
console.log("reduce", passFailScoresR);

const passFailScoresF = scores.filter((score) => {
  return score >= 50;
});

console.log("filter", scores);
console.log("filter", passFailScoresF);

const passFailScoresM = scores.map((score) => {
  if (score >= 50) {
    return "passed";
  }
  return "failed";
});

console.log("map", scores);
console.log("map", passFailScoresM);
