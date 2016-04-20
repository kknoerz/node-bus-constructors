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
  this.studentTattlesOn = function(y){
    console.log('This is your tattle: '+y);
    for(i=0;i<this.studentsOnTheBus.length;i++){
      if(this.studentsOnTheBus[i].name == y){
        console.log('removed student: '+this.studentsOnTheBus[i].name);
        this.studentsOnTheBus.splice(i,1);
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
