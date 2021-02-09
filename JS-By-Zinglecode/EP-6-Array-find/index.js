var scoresF = [82, 75, 48, 64, 36];
var failedScore = scoresF.find(function (score) {
    return score < 50;
});
console.log(failedScore);

