
var prompt = require('prompt');
var Bus = require('./bus.js');
var Student = require('./student.js')

var main = new Bus('Otto', 'rust', .25);
var schema = {
  properties: {
    name: {
      message: 'Please enter your name',
      type: 'string',
      required: true
    },
    gender: {
      message: 'Please enter either a gender you most identify with. Either m,  f, or na',
      pattern: /(m|f|na)/,
      required: true
    },
    grade: {
      message: 'What year in school are you? Ex: k-12',
      pattern: /(^[1][0-2]$|^[1-9]$|^(k)$)/,
      required: true
    },
    GPA: {
      message: 'Please enter GPA like this: 3.55',
      pattern: /^[0-4]\.\d\d$/,
      required: true
    },
    detentions: {
      message: 'How many detentions have you been to? Ex: 0-99',
      pattern: /^[0-9][0-9]$|^[0-9]$/,
      required: true
    },
    sleepingInClass: {
      message: 'How many days have you slept through a class? Ex: 0-99',
      pattern: /^[0-9][0-9]$|^[0-9]$/,
      required: true
    },
    catchPhrase: {
      message: 'What\'s your favorite saying?',
      type: 'string',
      required: true
    },
    tattle: {
      description: 'If you are not the first student, give a NAME to tattle on and they will be removed. If you are the first student or you don\'t want to tattle, press enter',
      type: 'string',
      required: false
    }
  }
};


var getNewStudent = function(){
  prompt.start();
  if(main.studentsOnTheBus.length == 0){
    console.log('You are the first student!');
  }

  if(main.studentsOnTheBus.length>0){
    console.log('Students Currently on the bus:');
    for(j=0;j<main.studentsOnTheBus.length;j++){
      console.log(main.studentsOnTheBus[j].name);
    }
  }
  prompt.get(schema, function (err, result) {
    if (err){
      console.log(err)
    }
    main.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
    console.log('You have: '+main.studentsOnTheBus.length+' students on the bus. The bus is full after 20 students.');
    console.log('The kids and their lingo: ');
    for (i=0;i<main.studentsOnTheBus.length;i++){
      console.log(main.studentsOnTheBus[i].catchPhrase);
    }
    if(main.studentsOnTheBus.length>1){
      if (result.tattle){
        console.log('Students before tattle: ');
        for(j=0;j<main.studentsOnTheBus.length;j++){
          console.log(main.studentsOnTheBus[j].name);
        }
        main.studentTattlesOn(result.tattle)
      }
    }
    if(main.studentsOnTheBus.length == 20){

      console.log('Bus full!');
    }
    while(main.studentsOnTheBus.length<20){
      getNewStudent();
      break;
    }
  });
}

getNewStudent();
