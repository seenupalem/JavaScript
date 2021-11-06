// console.log('Welcome to the fundamentals part 2 of JS sponsored by Udemy 😎😎😎');

//  'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if(hasDriversLicense) console.log('I can Drive');

// function seenu(){
//     console.log('I am Seenu');
// }

// calling the function, invoking the function, running the function \n
// using the function

// const kadiri = seenu();
// console.log(kadiri);
// seenu();
// seenu();
// seenu();
// seenu();

// function fruitProcessor (apples, oranges){
//     // console.log(apples, oranges);
//     const juice = `juice with ${apples} apples, and ${oranges} oranges`;
//     return juice;
// }

// const Juice1 = fruitProcessor(5,0);
// console.log(Juice1);
// const Juice2 = fruitProcessor(2,4);
// console.log(Juice2);
// const Juice3 = fruitProcessor(3,6);
// console.log(Juice3);


// Program to calculate a age

// Function Declaration //

// const ageManoj = calcAge(1994);
// console.log(`Age of the Manoj is ${ageManoj}`);
// function calcAge(birthYear){
//     return 2021-birthYear;
// }

// const ageManoj = calcAge(1994);
// console.log(ageManoj);

// const agePul = calcAge(1994);
// console.log(`Age of the Pul is ${agePul}`);

// const ageKadiri = calcAge(1994);
// console.log(`Age of the Kadiri is ${ageKadiri}`);

// Function Expression

// const calcAge2 = function(birthYear){
//     return 2021-birthYear;  // Function expression
// }
// const age2 = calcAge2(1994);
// console.log(age2); 

// Arrow Functions 

// const calcAge3 = birthYear => 2021 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);


// const yearUntilRetirement = (birthYear, nameOfPerson) => {
//     const age = 2021-birthYear;
//     const yearsLeftRetirement = 60 - age;
//     return `${nameOfPerson} left ${yearsLeftRetirement} years for retirement`;
// }

// console.log(yearUntilRetirement(1994 ,'Seenu'));

// console.log(yearUntilRetirement(1991 ,'Kadiri'));

// console.log(yearUntilRetirement(1981 ,'Palem'));

// function cutFruitPieces(fruit){
//     return 4*fruit;
// }

// function fruitProcessor(apples,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of Orange`;
//     return juice;
// }

// console.log((fruitProcessor(2,3)));


// Functions Coding Assignment


// Test Data 1
// const calcAverage = (scores) => scores/3 ;
// const dolphinAverage1 = calcAverage(44+23+71);
// const koalasAverage1 = calcAverage(65+54+49);
// console.log(dolphinAverage1, koalasAverage1);

// // Test Data 2
// const dolphinAverage2 = calcAverage(85+54+41);
// const koalasAverage2 = calcAverage(23+34+27);
// console.log(dolphinAverage2, koalasAverage2);

// function checkWinner(avgDophins, avgKoalas){
//     if(avgDophins > 2*avgKoalas){
//         return `Dophin wins ${avgDophins} vs ${avgKoalas}`;
//     }
//     else if(avgKoalas > 2*avgDophins){
//         return `Koalas wins ${avgDophins} vs ${avgKoalas}`;
//     }
//     else
//         return ('no team wins!');
// }

// const winner = checkWinner(dolphinAverage1, koalasAverage1);
// console.log(winner);

// function checkWinner2(avgDophins2, avgKoalas2){
//     if(avgDophins2 > 2*avgKoalas2){
//         return `Dolphin wins 😎(${avgDophins2} vs. ${avgKoalas2})`;
//     }else if(avgKoalas2 > 2*avgDophins2){
//         return `Koalas wins (${avgDophins2} vs. ${avgKoalas2})`;
//     }
//     else{
//         return 'no one wins!'
//     }
// }

// const winner2 = checkWinner2(dolphinAverage2, koalasAverage2);
// console.log(winner2);


// Arrays 

// const friends = ['manoj','harish','reddy'];
// console.log(friends);
// const printManojName = friends[0];
// console.log(printManojName);

// const years = new Array(2021,2022,2023,2024);
// console.log(years);


// console.log('Defining Arrays');

// const cources = ['javascript','python', 'devops', 'artificial intelligence','MI'];
// console.log(cources);
// console.log(cources.length);

// const years = new Array(1993,1994,1995, 1996);
// console.log(years);
// console.log(years.length);
// console.log(cources[cources.length-1]);

// cources[2] = 'AWS';
// console.log(cources);

// // cources = ['dejango','block chain', 'angular js'];
// // console.log(cources);

// const firstName = 'seenu';
// const arrayList = [firstName, 'kadiri', 2021-1994, 'software developer', cources];
// console.log(arrayList);

// function calcAge(birthYear){
//     return 2021-birthYear;
// }

// const dob = [1991,1993,1996,1998]

// const age1 = calcAge(dob[0]);
// const age2 = calcAge(dob[1]);
// const age3 = calcAge(dob[2]);
// const age4 = calcAge(dob[dob.length-1]);

// const ageData = [age1, age2, age3, age4];
// console.log(ageData);
// const ageData2 = [calcAge(dob[0]),calcAge(dob[1]),calcAge(dob[2]),calcAge(dob[dob.length-1])];
// console.log(ageData2);
// console.log([age1,age2,age2,age4]);

// Array Methods 

// const friends = ['manoj', 'harish','reddy'];
// console.log(friends);
// const addSrinu = friends.push('srinu');
// console.log(addSrinu);
// console.log(friends);
// friends.unshift('babu');
// console.log(friends);
// // const lenghtOfList = friends.push('srinu');
// // console.log(lenghtOfList);
// const removedElement = friends.pop();
// console.log(friends);
// console.log(`Removed element from the array is "${removedElement}"`);
// const removedElement2 = friends.shift();
// console.log(friends);
// console.log(`Removed element from the array is "${removedElement2}"`);

// const positionOfElement = friends.indexOf('reddy');
// console.log(positionOfElement);
// console.log(friends.indexOf('babu'));
// console.log(friends.indexOf('harish'));
// console.log(friends.indexOf('manoj'));

// console.log(friends.includes('reddy'));
// console.log(friends.includes('srinu'));
// console.log(friends.includes('manoj'));
// console.log(friends.includes('harish'));
// console.log(friends.includes('kadiri'));

// Challenge #2

// function calcTip(billValue){
//     if (billValue <= 300 && billValue >= 50){
//         return billValue*(15/100);
//     }else{
//         return billValue*(20/100);
//     }
// }
// const tip = calcTip(100);
// console.log(tip);
// const billsArray =[125, 555, 44];
// console.log(billsArray);
// // const tip1 = calcTip(billsArray[0]);
// // const tip2 = calcTip(billsArray[1]);
// // const tip3 = calcTip(billsArray[2]);

// // console.log([tip1, tip2, tip3]);
// console.log([calcTip(billsArray[0]),calcTip(billsArray[1]),calcTip(billsArray[2])]);


// // const totalValue1 = billsArray[0]+tip1;
// // const totalValue2 = billsArray[1]+tip2;
// // const totalValue3 = billsArray[2]+tip3;

//console.log([totalValue1,totalValue2,totalValue3]);

// console.log([ billsArray[0]+calcTip(billsArray[0]),billsArray[1]+calcTip(billsArray[1]), billsArray[2]+calcTip(billsArray[2])]);


// const seenuData = {
//     firstName : 'palem',
//     lastName : 'kadiriseenu',
//     age : 2021-1994,
//     job : 'software developer',
//     friends : ['manoj','harish','reddy']
// };

// console.log(seenuData);

// console.log(seenuData.firstName);
// console.log(seenuData.age);
// console.log(seenuData.lastName);
// console.log(seenuData.friends);
// console.log(seenuData.job);
// const palemData = ['palem','kadiriseenu',2021-1994,'software developer',['manoj','harish','reddy']];
// console.log(palemData);
// console.log(seenuData['firstName']);
// console.log(seenuData['lastName']);
// console.log(seenuData['age']);
// console.log(seenuData['job']);
// console.log(seenuData['friends']);

// const seenuData = {
//     firstName :'palem',
//     lastName :'kadiriseenu',
//     birthYear : 1994,
//     job :'web developer',
//     hasDrivingLicense : 5>1,
    
//     calcAge : function(birthYear){
//         return 2021-birthYear;
//     }
//     calcAge:function(){
//         console.log(this);
//         return 2021 - this.birthYear;
// //     // }
    // calcAge:function(){
    //     this.age =2021 - this.birthYear;
    //     return this.age;
//     },
//     // getSummary : function(){
//          return `${seenuData.firstName} is a ${seenuData.calcAge()}- year old ${seenuData.job}, and has
//           ${seenuData.hasDrivingLicense? 'a':'no'} driver's license.`
//  }
//     getSummary : function(){
//         return `${this.firstName} is a ${this.calcAge()}- year old ${this.job}, and has
//         ${this.hasDrivingLicense? 'a':'no'} driver's license.`
//     }
// };
// console.log(seenuData.calcAge());
// console.log(seenuData.age);
// console.log(seenuData.age);
// console.log(seenuData.age);
// console.log(seenuData.age);

// // console.log(seenuData['calcAge'](1994));

// console.log(seenuData.getSummary());


// Coding Challenge 

// const prasannaData = {
//     firstName : 'Prasanna',
//     lastName : 'Kumar',
//     mass: 78,
//     height : 1.69,

//     calcBMI:function(){
//         const prasannaBMI = this.mass/(this.height*this.height);
//         return prasannaBMI;
// }
// };

// const pavanData ={
//     firstName : 'Pavan',
//     lastName :'Kalyan',
//     mass : 92,
//     height : 1.95,
//     calcBMI:function(){
//         return this.mass/(this.height*this.height);
// },
// };

// console.log(prasannaData.calcBMI(), pavanData.calcBMI());
// console.log(pavanData.calcBMI());

// prasannaData.calcBMI() > pavanData.calcBMI() ? console.log(`${prasannaData.firstName} BMI (${prasannaData.calcBMI()})
// is higher than ${pavanData.firstName} 's (${pavanData.calcBMI()})!`): 'dont print anything';

// let i=1;
// for(i=1;i<=10;i++){
//     console.log(`the number is ${i}`);
// }


// for(let rep =1; rep<=10 ;rep++){
//     console.log(`make the first repetetion ${rep}`);
// }

// const palemData = ['palem', 'kadiriseenu', 2021-1994, 'software developer', 'bangalore'];
// for(let i=0;i<=palemData.length-1;i++){
//     console.log(`The array elements are ${palemData[i]}`);
// }

// for(let i = palemData.length-1 ;i>=0 ;i--){  // Backward Array
//     console.log(`The array elements in a reverse order ${palemData[i]}`);
// }

// for(let i=1; i<=3 ;i++){
//     console.log(`Set number ${i}`);
//     for(let j=1; j<=10 ;j++){
//         console.log(`the repetition ${j}`);
//     }
// }

// const palemData = ['palem', 'kadiriseenu', 2021-1994, 'software developer',
//                  'bangalore', ['manoj','harish','reddy'], true];
// const types = [];
// const newList = [];

// for(let i=0;i<=palemData.length-1;i++){
//     console.log(palemData[i], typeof(palemData[i]));
//     // types[i] = typeof(palemData[i]);
//     types.push(typeof palemData[i]);

//     const newlist = newList.unshift(typeof palemData[i]);
// }

// console.log(types);
// console.log(newList);
// newList.pop();
// newList.pop();
// newList.pop();
// newList.pop();
// console.log(newList);
// newList.shift();
// newList.shift();
// console.log(newList);


// const dob = [1991, 1993, 1996, 1998, 2000];
// const ages = [];

// for( let i=0; i<=dob.length-1 ; i++){
//     ages.push ( 2021 - dob[i] );
// }
// console.log(ages);

// const seenuData = ['palem', 'kadiriseenu', 2021-1994, 'software developer',
//                  'bangalore', ['manoj','harish','reddy'], true];

// for(let i=0 ; i<=seenuData.length-1 ; i++){
//     if (typeof seenuData[i] !== 'string')  continue;
//     console.log(seenuData[i], typeof seenuData[i]);
// }

// 'use strict';

// let hasDriverLicense = false;
// const passTest = true;
// if(passTest) hasDriverLicense = true;
// if(hasDriverLicense) console.log('I can drive happily');


let billValues = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function(billValue){
    if (billValue <= 300 && billValue >= 50){
             return billValue*(15/100);
         }else{
             return billValue*(20/100);
         }
        }
for(let i=0; i < billValues.length ;i++ ){
    const billVal = billValues[i];
    // tips.push(calcTip(billValues[i]));
    const tipValue = calcTip(billVal);
    tips.push(tipValue);
    // tips.push(calcTip(billVal));
    // console.log(billVal, tipValue);
    // const totalValue = billVal+tipValue;
    // totals.push(totalValue);
    totals.push(billVal+tipValue);
}

console.log(tips);
console.log(totals);
console.log(billValues, tips, totals);

const calcAverage = function(arrays){
    let sum = 0;
    for(i=0; i<= arrays.length-1; i++){
        sum = sum+arrays[i];
    }
    return sum/arrays.length;
}
    console.log(calcAverage(totals));
    console.log(calcAverage(tips));
    console.log(calcAverage(billValues));

