let studentScore=[10,20,30,35,45,50,60,80,90,95];
let passedStudent=0;
for(let i=0;i<studentScore.length;i++){
  if(studentScore[i]<40){
    studentScore[i]+=20;
  }if(studentScore[i]>90){
    studentScore[i]=90;
  }
  if(studentScore[i]>=50){
    passedStudent++;
  }
}
console.log("Adjusted Student Score",studentScore);
console.log("Number of Passed Student",passedStudent);