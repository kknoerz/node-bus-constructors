// in main.js make the bus object with the constructor function,
// and then add 20 students to it. Then successfully all the busChatter property of the bus object.


var prompt = require('prompt');
var Bus = require('./bus.js');
var Student = require('./student.js')

var main = new Bus('Otto', 'rust', .25);


var getNewStudent = function(){
prompt.start();


  prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
    if (err){
      console.log(err)
    }

    // var newStudent = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
    main.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
    console.log('You have: '+main.studentsOnTheBus.length+' students on the bus. The bus is full after 20 students.');
    for (i=0;i<main.studentsOnTheBus.length;i++){
      console.log('The kids and their lingo: '+main.studentsOnTheBus[i].catchPhrase);
    }
    while(main.studentsOnTheBus.length<20){
      getNewStudent();
      break;
    }
    if(main.studentsOnTheBus.length == 20){
      console.log('Bus full!')
    }

  });
}

getNewStudent();
