// First assignment in Udemy to calculate and print BMI of given inputs


/*const johnWeight=92, johnHeight=1.95;
const markWeight=78, markHeight=1.69;
const johnBMI, markBMI;
const higherBMI;
johnWeight=92;
johnHeight=1.95;
markWeight=78;
markHeight=1.69;
const johnBMI=johnWeight/(johnHeight * johnHeight);
const markBMI=markWeight/(markHeight * markHeight);
const higherBMI=markBMI>johnBMI;
console.log(johnWeight, johnHeight);//With Test data 1
console.log(markWeight, markHeight);//With Test data 1
console.log(markBMI,johnBMI);//With Test data 1
console.log(higherBMI);
/*johnWeight=85;
johnHeight=1.76;
markWeight=95;
markHeight=1.88;
johnBMI=johnWeight/(johnHeight * johnHeight);
markBMI=markWeight/(markHeight * markHeight);
console.log(johnWeight, johnHeight);//With Test data 2
console.log(markWeight, markHeight);//With Test data 2
console.log(markBMI,johnBMI);//With Test data 2
higherBMI=markBMI>johnBMI;
console.log(higherBMI);

// New line command and template literals(backticks)

console.log('this is the strings\n\
with multiple \n\
lines'); //using newline command we will get new lines in HTML
console.log(`this is 
newlin
command with template literals`);


// If-else statements

const age=17;
if(age>=18){
    console.log("you're now eligble to take the driving🚗🚗 test");}//
else{
    const yearsleft = 18-age;
    console.log(`you're ${yearsleft} years to left to take the test`);
}


const birthYear = 2015;
let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);


const johnWeight=60, johnHeight=1.6;
const markWeight=70, markHeight=1.9;
const johnBMI=johnWeight/(johnHeight * johnHeight);
const markBMI=markWeight/(markHeight * markHeight);
const differenceInBMI = johnBMI-markBMI;
console.log(johnBMI, markBMI);


//Template literals

if(markBMI>johnBMI){
    console.log(`Mark(${markBMI}) has higher BMI than John(${johnBMI}) `);
}else{
    console.log(`John (${johnBMI}) has BMI higher than mark (${markBMI})`)
}

//Type Conversion and coercion

// Type Conversion

const birthYear = '1993'; //string
console.log(Number(birthYear), birthYear);
console.log( Number(birthYear) + 18); // converting string into number manually
console.log(birthYear + 18); // concatenation of string will occure here

console.log(Number('seenu'));
console.log(typeof NaN);
console.log(String(24), 24);
console.log(23+ 'seenu');

// Type coercion

console.log("I am " + 27 + " years old ");
console.log("I am "+ "27" + " years old");

console.log('23'-'10'-'3');
console.log('23'+'20'*'3');
console.log('23'/'10'/'3');
console.log(23);
console.log('23'>'11');

let n = '1' + 1;
n = n-1;
console.log(n); 

// Truthy and Falsy Values

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean (undefined));
console.log(Boolean (null));
console.log(Boolean (NaN));

console.log(Boolean('seenu'));
console.log(Boolean({}));

let money = 10;
if(money){
    console.log("don't spend the money");
}else{
    console.log('first get a job');
}

let height= 0;
if(height){
    console.log('height value is defined');
}else{
    console.log('height value is undefined');
}


// Equality Operators == vs ===

let currentYear = 2021;
if(currentYear == 2021) console.log("You're in same year (loose Equality Operator)");
if(currentYear === 2021) console.log("You're in same year (Strict Equality Operator)");

// Getting input from webpage

const enterNumber = Number(prompt("What's your favorite number "));
// `enterNumber = Number(enterNumber); When using let variable you may create another\n
// for storing value //
console.log(enterNumber);
console.log(typeof(enterNumber));

if (enterNumber === 49) console.log('entered number is 49');

const year = Number(prompt('Enther the year'));
console.log(year);
if ( year === 2021) console.log('entered current year');
else if(year === 2019) console.log('entered listed years 19,18,15');
else if( year === 2018 ) console.log('entered 2018');
else if( year === 2015 ) console.log('entered 2015');
else{
    console.log('entered none of the above years');
} 

if(year !== 2021) console.log('this is not 2021');

// Boolean Logic 

const isCapable =false;
const isHardWorker = false;

console.log( isCapable && isHardWorker);
console.log(isCapable || isHardWorker);
console.log( !isCapable );
const isFit = true;

if( isCapable || isHardWorker || isFit){
    console.log('Seenu will definitely achieve his goal');
}
else{
    console.log('Seenu will definitely achieve his goal but it takes time');
}  */

// let dolphinsScores, koalasScores;
// dolphinsScores = 96, 108, 89;
// koalasScores = 89, 91, 110;
// let avgScoreDolphins = (96+108+89)/3;
// let avgScoreKoalas = (89+91+110)/3;
// console.log(avgScoreDolphins);
// console.log(avgScoreKoalas);

// if(avgScoreDolphins > avgScoreKoalas){
//     console.log("Dolphins team is the winner");
// }else if(avgScoreDolphins === avgScoreKoalas){
//     console.log('The match is draw');
// }else{
//     console.log('Koalas team is the winner');
// }


// Conditional Operator

// const age = 24;
// age >=18 ? console.log("You're an Adult"):
// console.log("You're not an adult");
// const drink = age >= 18 ? 'wine' :'water';
// console.log(drink);
// console.log(`I'd like to drink ${age >= 18 ? 'wine' :'water'}`);

// const yearsOld = 30;
// const mar = yearsOld >= 25 ? 'married' : 'unmarried';
// console.log(mar);


// let day = prompt('Enter the day');
// console.log(`entered day is ${day}`); // Using Template literals

// switch(day){
//     case 'monday': 
//         console.log('To day is monday');
//         break;
//     case 'tuesday':
//         console.log('today is tuesday');
//         break;
//     case 'wednesday':
//         console.log('today is wednesday');
//         break;
//     case 'thursday':
//         console.log('today is thursday');
//         break;
//     case 'friday' :
//         console.log('today is friday');
//         break;
//     case 'saturday' :
//         console.log('today is saturday');
//         break;
//     case 'sunday' :
//         console.log('today is sunday');
//         break;
//     default :
//         console.log('entered invalid day');
// }

// const isToday = 'friday';
// // const today = isToday === day ? "you're in the same day" : "You're in someother day";
// console.log(isToday === day ? "you're in the same day" : "You're in someother day");

// Code Challenge #4


// let billValue1   = prompt('enter the first bill value');
// let tip1 = billValue1 >= 50 && billValue1 <= 300 ? (15/100)*(billValue1) : (20/100)*(billValue1);
// console.log(tip1) ;
// let finalValue = Number(billValue1) + tip1;
// console.log(`The bill was ${billValue1}, the tip was ${tip1}, and the total value ${finalValue}`);


// let billValue2 = prompt('enter the Second bill value');
// let tip2 = billValue2 >= 50 && billValue2 <= 300 ? (15/100)*(billValue2) : (20/100)*(billValue2);
// console.log(tip2) ;
// let finalValue2 = Number(billValue2) + tip2 ;
// console.log(`The bill was ${billValue2}, the tip was ${tip2}, and the total value ${finalValue2}`)


// let billValue3 = prompt('enter the Second bill value');
// let tip3 = billValue3 >= 50 && billValue3 <= 300 ? (15/100)*(billValue3) : (20/100)*(billValue3);
// console.log(tip3) ;
// let finalValue3 = Number(billValue3) + tip3;
// console.log(`The bill was ${billValue3}, the tip was ${tip3}, and the total value ${finalValue3}`)

