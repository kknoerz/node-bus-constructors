var Student = require("./student.js");

var Bus = function (driverName,color,gas){

  this.studentsOnTheBus = [];
  this.tattleOn = [];
  this.driverName = driverName;
  this.color = color;
  this.gas = gas;
  this.studentEntersBus = function (n, g, gr, GPA, d, s, c) {
    this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
  }
  this.studentTattlesOn = function(t){
    console.log('This is your tattle: '+t);
    for(i=0;i<this.studentsOnTheBus.length;i++){
      if(this.studentsOnTheBus[i].name == t){
        console.log('removed student: '+this.studentsOnTheBus[i].name);
        this.studentsOnTheBus.splice(i,1);
      }else{
        console.log('I couldn\'t understand ya kid, did you say: '+t+'? Are you sure you have the correct name? Life only gives you one chance to make your move. Get on the bus!');
        return 
      }
    }
  }
}

module.exports = Bus;


// if (t){
//   for(i=0;i<this.studentsOnTheBus.length;i++){
//     if(t = this.studentsOnTheBus[i].name){
//       console.log('you tattled on '+this.studentsOnTheBus[i].name);
//     }
//   }
// }
