// ! ! !
// Three Bugs


//object constructor

function Employee(empName, empBonusPercent, empTotalComp, empBonusAmount){

  this.name = empName;
  this.bonusPercent = empBonusPercent;
  this.totalComp = empTotalComp;
  this.bonusAmount = empBonusAmount

}


function People(empName, empNumber, empSalary, empRating){

  this.name = empName;
  this.id = empNumber;
  this.salary = empSalary;
  this.rating = empRating;
  this.validate = function(){

    if (this.name == undefined){
      this.name = "name not entered"
    }
    if (this.id == undefined){
      this.id = "id not entered"
    }
    if (this.salary == undefined){
      this.salary = "salary not entered"
    }
    if (this.rating == undefined){
      this.rating = "rating not entered"
    }

  }
  



}

var atticus = new People("Atticus", "2405", "47000", 3);
var jem = new People("Jem", "62347", "63500", 4);
var boo = new People("Boo", "11435", "54000", 3);
var scout = new People("Scout", "6243", "74750", 5);


var array = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');


// function buildEmployees(){
//   //Loop the array, extracting each array and writing information to the DOM
//   //Note that the information is not 'clean'
//   for(var i = 0; i < array.length; i++){
//     //BUG 1: missing [i] after second array call
//     array[i].validate();

//     //console.log(array[i]);

// 	 array[i] = calculateSTI(array[i]);
//  	  newEl = document.createElement('li');
// 	 newText = document.createTextNode(array[i]);
// 	 newEl.appendChild(newText);
// 	 position.appendChild(newEl);
//   }

// }


function buildEmployees2(){
  //Loop the array, extracting each array and writing information to the DOM
  //Note that the information is not 'clean'
  for(var i = 0; i < array.length; i++){
    //BUG 1: missing [i] after second array call
    array[i].validate();

    console.log(array[i]);

    var myObject = calculateSTI2(array[i]);

    console.log(myObject);

    appendDom(myObject, i);

   

  }

}

buildEmployees2();



function calculateSTI(object){

  var newArray = [];

  newArray[0] =  object.name ;

  console.log("new array 0=" + newArray[0]);
  console.log(object.id);

  var employeeNumber = object.id;

  var baseSalary = object.salary;
  var reviewScore =object.rating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = "  " + bonus;
  //BUG 2: add Math.round
  newArray[2] = "  " + Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = "  " + Math.round(baseSalary * bonus);

// if 1 2 3 not numbers then set them as strings
  //for ( var i = 1; i < newArray.length; i++){

  


  //}

  if (isNaN(newArray[1])){
      newArray[1]="some string";
  }

    if (isNaN(newArray[2])){
      newArray[2]="some string";
  }

  if (isNaN(newArray[3])){
      newArray[3]="some string";
  }


  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;


}

function calculateSTI2(object){

  var newArray = [];

  newArray[0] =  object.name ;

  console.log("new array 0=" + newArray[0]);
  console.log(object.id);

  var employeeNumber = object.id;

  var baseSalary = object.salary;
  var reviewScore =object.rating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = "  " + bonus;
  //BUG 2: add Math.round
  newArray[2] = "  " + Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = "  " + Math.round(baseSalary * bonus);

// if 1 2 3 not numbers then set them as strings
  //for ( var i = 1; i < newArray.length; i++){

  


  //}

  if (isNaN(newArray[1])){
      newArray[1]="some string";
  }

    if (isNaN(newArray[2])){
      newArray[2]="some string";
  }

  if (isNaN(newArray[3])){
      newArray[3]="some string";
  }


  var newObject = new Employee(newArray[0], newArray[1], newArray[2], newArray[3])

  return newObject;


}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  //BUG 3: basePercent - 1
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}


function appendDom(object, myIndex){

  if (myIndex % 2 == 0){

     $('.container').append('<div class="person1"></div>');

  } else {

    $('.container').append('<div class="person2"></div>');

  }
  //$('.container').append('<div class="person"></div>');

  var $el = $('.container').children().last();



  $el.append('<p>' + "Employee Name:  " + object.name + '</p>');
  $el.append('<p>' + "Bonus Percent:  " +object.bonusPercent + '</p>');
  $el.append('<p>' + "Total Compensation:  $" +object.totalComp + '</p>');
  $el.append('<p>' + "Bonus Amount:  $"  +object.bonusAmount + '</p>');
  // $el.append('<p>' + object.position + '</p>');
  // $el.append('<p>' + object.salary + '</p>');
  // $el.append('<p>' + object.rating + '</p>');
}
