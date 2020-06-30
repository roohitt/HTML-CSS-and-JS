// Javascript runs on js engine present in the browser and the first thing that happens inside the engine,is that our code is parsed by a parser,
//which basically reads our code line by line, and checks if the syntax of the code that we gave it is correct.
//if you make some mistakes, it basically throws an error and stops the execution.
//If everything is correct though then the parser produces a data structure known as the Abstract Syntax Tree which is then translated into machine code.
//So this code is no longer JavaScript code but a code, or let's say a set of instructions, that can be executed directly by the computer's processor.

//q1. Compare bmi after calculating and display in console.

var mark_height = 5.8;
var john_height = 5.10;
var mark_weight = 40;
var john_weight = 40;

var mark_bmi = mark_weight/mark_height*mark_height;
var john_bmi = john_weight/john_height*john_height;

var anser = true;

if(mark_bmi>john_bmi){
    console.log("Is marks bmi greater? " + anser);
}
else{
    console.log("Is marks bmi greater? " + !anser);
}

18 > 19 ? console.log('hello'):console.log("nello");

//falsy values : values that are not false but will be evaluated to false in if-else when used in an if else statement.
//examples of falsy values: undefined, null, 0, '',NaN
//truthy values: not falsy values

var height;

if (height){
    console.log("This will not be printed");

}
else{
    console.log("This will print because height is undefined and therefore a falsy value");
}

//
var height = 0;
if (height){
    console.log("This will not be printed");

}
else{
    console.log("This will print because height is 0 and therefore a falsy value");
}

//Equality operators:
height = 23; 
if(height == '23'){
    console.log('The == operator does type coercion!');
}

//Q2. Average of two teams score : 89,120,103 and 116,94,123.
//print winner to console with the average score.
//there may be same score.

John_team = (89+120+103)/3;
mike_team = (116+94+123)/3;


if(John_team>mike_team){
    console.log("The winner is John with an average score of : "+ John_team);
}
else if(mike_team>John_team){
    console.log("The winer is mike with an average score of : "+ mike_team);
}
else{
    console.log("Draw bw the the two teams");
}
//--------------------------------------------------------------------------------------------------------
//functions:expression and statement type
//expressions always produce a result like the expression function returns the firstNAme and the job role.
//statements they only perform some actions but do not give immediate results like while loop and if-else.

//1. function statememts
function calculateAge(birthYear){
    return 2020-birthYear;
}
var agejohn = calculateAge(1990);
var agemike = calculateAge(1992);
var agejane = calculateAge(1996);

console.log(agejane,agejohn,agemike);

// 2.function expressions:assigning a funct to a variable.
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' is a teacher';
            
        case 'driver':
            return firstName + ' is a driver ';
            
        default:  return firstName + 'does something';      
    }
}

console.log(whatDoYouDo('teacher','john'));

//=======================================================================================================
//arrays: index starts with 0.

//two ways to create arrays:
var names = ['vishal','shreyansh','rohit'];
var years = new Array(1990,1998,1969);

console.log(names[0]);
console.log(names.length);

//mutate :
names[1] = 'kapil';

//can also access a index that does not even exists
names[5] = 'marry';
console.log(names);

//adding at last position 
names[names.length] = 'numan';
console.log(names);
// or: names.push();

//add at beginning:
 names.unshift('Lokesh');

 console.log(names.indexOf('kapil'));

 //Q3. bill amounts: 124,48,268. Create a function to add a tip:
 //20% if bill<50, 15% <50bill<200 and 10 if >200.

 
 function tip_calculator(bill_amount) {
    var percentage;
    if(bill_amount<50){
        percentage = 0.2;    
    }
    else if(50<bill_amount<200){
        percentage = 0.15;
    }
    else{
        percentage = 0.1;
    }
    return percentage*bill_amount;
}

 var bills = [124,48,268];
 var tips_list = [tip_calculator(bills[0]),tip_calculator(bills[1]),tip_calculator(bills[2])];
 var final_Amount = [bills[0]+tips_list[0],bills[1]+tips_list[1],bills[2]+tips_list[2]];
 console.log(bills);
 console.log(tips_list);
 console.log(final_Amount);

 //=======================================================================================

//                                       OBJECTS: object literal and new Object()
 //In lists we cannot assign a key to every value we store in it so we have objects where we can have keys value pairs.
 //in objets order does not matter how we store values whereas in lists it matters.

//Object literal
 var John = {
     firstName: 'John',
     lastName : 'Smith',
     age: 29,
     family: ['vishal', 'kapil','mohit'],
     job : {now:'teacher',then:'developer'}
 }

 //objects can also be inside a object.

 console.log(John.family);// or console.log['family']);

 //mutate :
 John.lastName = 'Boyler';

 // creating an empty object and then populating:new Object()
 var Jane = new Object();

 Jane.firstName = 'Jane';
 Jane.lastName = 'Smith';
 Jane.age = 20;

 //both of them do the same thing(unless someone's done something unusual) just the literal way requires less amount of code.

 //method in onjects:function inside an object.
 //this keyword can be used inside to refer to a property(birthYear) and also to create  A new property(age) for the object

 var john = {
     name: "john smith",
     class : 10,
     birthYear : 2000,
     calculateAge : function(){
        this.age = 2020 - this.birthYear; 
     }

 }

john.calculateAge();
 console.log(john);


 //Question: Create objects for MArk and John with the properties: full name, mass and height.
 var MArk = {
     full_name :'MArk stanley',
     mass: 50,
     height : 5.8,
     bmiCalc : function(){
        this.bmi =  this.mass/(this.height*this.height);
        return this.bmi;
     }
 }

var  John = {
    full_name :'John stanley',
    mass: 60,
    height : 5.8,
    bmiCalc : function(){
       this.bmi =  this.mass/(this.height*this.height);
       return this.bmi;
    }
}

John.bmiCalc();
MArk.bmiCalc();

if(John.bmi>MArk.bmi){
    console.log(John.full_name+" is having greater bmi with bmi = "+John.bmi);
}
else{
    console.log(MArk.full_name+" is having greater bmiwith bmi = "+Mark.bmi);
}

//question: john and his family went to 5 diff places bills : 124, 48, 268, 180, 42.

John = {
    discount: 0 ,
    bill : [124,48,180,42],
    tips :[],
    calculateTip : function(){
        for(var i=0;i<this.bill.length;i++)
        {
            if(this.bill[i]<50){
                discount = 0.2;
            }
            else  if(50<this.bill[i]<200){
                discount = 0.15;
            }
            else if(this.bill[i]>200){
                discount = 0.10;
            }
            this.tips[i] = discount*this.bill[i];
        }
    }
}

John.calculateTip();
console.log(John.tips);
