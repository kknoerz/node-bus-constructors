
var prompt = require('prompt');
var Bus = require('./bus.js')

var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase) {
  var thisStudent = this;
  this.name = name;
  this.gender = gender;
  this.grade = grade;
  this.GPA = GPA;
  this.detentions = detentions;
  this.sleepingInClass =sleepingInClass;
  this.catchPhrase = catchPhrase;

  var canStudentHaveFun = function(detentions, GPA){
      if(thisStudent.detentions<10 && thisStudent.GPA >= 2){
        console.log(this.name+" can have fun!");
      }else{
        console.log(this.name+' may not have fun! Detentions: '+thisStudent.detentions+', GPA: '+thisStudent.GPA)
      }
  }
  canStudentHaveFun();
}


module.exports = Student;
