/* coding challenge 2


John and Mike both play basketball in different teams. in the latest 3 games, 
john's team scored 89 120 and 103 points, while mike's team scored 116 94 and 123 points

calculate the average score for each team
decide whic team wins in average and print winner to console and include average score

extra mary plays basketball and they score 97 134 and 105*/



var avgScoreJohn = (89 + 120 + 103) / 3;
var avgScoreMike = (116 + 94 + 123) / 3;
var avgScoreMary = (97 + 134 + 105) / 3;

console.log("John's average score is " + avgScoreJohn);
console.log("Mike's average score is " + avgScoreMike);
console.log("Mary's average score is " + avgScoreMary);


if(avgScoreJohn > avgScoreMike) {
    console.log("John has a higher average score than Mike with " + avgScoreJohn + ".");
}
else if (avgScoreJohn < avgScoreMike) {
    console.log("Mike has a higher average score than John with " + avgScoreMike + ".");
}
else if (avgScoreJohn == avgScoreMike) {
    console.log("Draw.");
}


if(avgScoreMary > avgScoreMike) {
    console.log("Mary has a higher average score than Mike with " + avgScoreMary + ".");
}
else if (avgScoreMary < avgScoreMike){
    console.log("Mike has a higher average score than Mary with " + avgScoreMike + ".");
}
else if (avgScoreMary == avgScoreMike) {
    console.log("Draw.");
}


if(avgScoreMary > avgScoreJohn) {
    console.log("Mary has a higher average score than John with " + avgScoreMary + ".");
}
else if (avgScoreMary < avgScoreJohn){
    console.log("John has a higher average score than Mary with " + avgScoreJohn + ".");
}
else if (avgScoreMary == avgScoreJohn) {
    console.log("Draw.");
}