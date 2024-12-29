function tellFortune(JobTittle,location,PartnerName,NumOfChild)
{
    console.log(`You will be a ${JobTittle} in ${location}, and married to ${PartnerName} with ${NumOfChild} kids.`);
}
tellFortune("software engineer", "Jordan", "Alice", 3);
//1

function calculateDogAge(puppyAge)
{
    let dogAge= puppyAge*7;
    console.log(`Your doggie is ${dogAge} years old in dog years!`);
}
calculateDogAge(1);
//2
function calculateSupply(age,amountperDay)
{
    const maxAge = 100;
    const yearsRemaining = maxAge - age;
     const totalAmount = yearsRemaining * 365 * amountperDay;
    console.log(`You will need ${totalAmount} cups of tea to last you until the ripe old age of ${maxAge}`);
}
calculateSupply(30, 3);
//3

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
    function greet(name)
    {  
        return"Hello  " +name;

    }
    let greetingMessage = greet("Adam");
    console.log (greetingMessage);
    //console.log(greet("Adam"));بدل ما استدعي متغير جديد واخزن فيه قيمة 
    //4
    //what is the error:
// function double(x) {
//   return 2 * x;
// }
// let x=parseFloat(prompt("enter the number"));
// console.log(double(x));//ما بتشغتل لما احولها
function double(x) {
    return 2 * x; 
}
console.log(double(5.5)); 


//wher's the error
// function double(7) {ما بزبط احط الparmeterرقم او اشي ثابت
//     return 2 * 7;
//   }
function double(num) {
    return num*2;
}

console.log(double(7));

function double(num) {
    return 2 * parseInt(num);  // تحويل النص إلى عدد ثم ضربه في 2
}console.log(double(4)); 
//5
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
تصحيح function double1(x) {
  return 2 * x;
}
console.log(double1(5.9));



functiondouble2 x)
return 2 * x;
}
تصحيحfunction double2(x) {
  return 2 * x;
}
console.log(double1(5.8));




function (x) double3 {
  return 2 * x;

تصحيحfunction double3(x) {
  return 2 * x;
}
console.log(double1(4.0));
6
*/

/*
7
Write a function called cubeالتكعيب that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x) {
    // return x *x * x;
return x**3;// ** الذي يُستخدم لحساب الأس.اوفي function جاهزة
}
console.log("Cube= " +cube(4));
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
    function multiply(num1,num2) {
        return num1*num2;

    }
    let g=multiply(3,4);
    let y=multiply(5,4);
    console.log(g);
    console.log(y);
    /*
9
Write a function called canIGetADrivingLicense رخصة القايدةthat:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// function canIGetADrivingLicense(age) {
//     if (age>=20) {
//         console.log("yes you can");
//     }
//     else{
//         let yearsLeft = 20 - age;  // حساب السنوات المتبقية
//         return `please come back after ${yearsLeft} years to get one`; 
//     }
// }
// console.log(canIGetADrivingLicense(21));  
// console.log(canIGetADrivingLicense(17));  
// console.log(canIGetADrivingLicense(20));

function canIGetADrivingLicense(age) {
    if (age >= 20) {
    return "yes you can";  
    } else {
    let years = 20 - age;  
    return `please come back after ${years } years to get one`;  
    }
}

console.log(canIGetADrivingLicense(21));  
console.log(canIGetADrivingLicense(17));  
console.log(canIGetADrivingLicense(20));  
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(string1,string2) {
    return string1.length===string2.length;
}
console.log(sameLength("tree", "clue")); 
console.log(sameLength("tree", "car")); 
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(number1,number2) {
    if (number1>number2) {
    return number1;
    }
    else if(number2>number1){
        return number2;
    }
} console.log(largerNubmer(5,6));
console.log(largerNubmer(5,3));
// another solution function largerNumber(num1, num2) {
//     return num1 > num2 ? num1 : num2;  // استخدام عامل المقارنة لاختيار الرقم الأكبر
//   }
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer (num1,num2,num3) {
    if (num1>num2 && num2 >num3) {
        return num3;
        }
        else if(num2>num3 && num3>num1){
            return num1;
        }
        else if(num2>num1 && num1>num3){
            return num3;}

        else { return num2}
}
console.log(smallerNubmer(8, 6,7)); 
console.log(smallerNubmer(5, 99,34)); 
console.log(smallerNubmer(5, 99,3)); 
console.log(smallerNubmer(5, 3,3)); 

//
// function smallerNumber(num1, num2, num3) {
//     return Math.min(num1, num2, num3);
 // استخدام الدالة Math.min لإيجاد الرقم الأصغر
// }

// console.log(smallerNumber(8, 6, 7));   // ستطبع 6
// console.log(smallerNumber(5, 99, 34)); // ستطبع 5
// console.log(smallerNumber(5, 99, 3));  // ستطبع 3


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5) {
    if (str1.length <= str2.length && str1.length <= str3.length && str1.length <= str4.length && str1.length <= str5.length) {
    return str1;
    } else if (str2.length <= str1.length && str2.length <= str3.length && str2.length <= str4.length && str2.length <= str5.length) {
    return str2;
    } else if (str3.length <= str1.length && str3.length <= str2.length && str3.length <= str4.length && str3.length <= str5.length) {
    return str3;
    } else if (str4.length <= str1.length && str4.length <= str2.length && str4.length <= str3.length && str4.length <= str5.length) {
    return str4;
    } else {
    return str5;
    }
}

console.log(shorterString("air", "school", "car", "by", "github")); 
console.log(shorterString("air", "tr", "car", "by", "github"));     
console.log(shorterString("by", "tr", "car", "air", "github"));    
console.log(shorterString("air", "by", "car", "school", "github")); 
console.log(shorterString("air", "tr", "by", "car", "github"));      
console.log(shorterString("air", "tr", "car", "github", "by"));    
//طريقة حل آخرى
// function shorterString(str1, str2, str3, str4, str5) {
//     let shortest = str1;  // تعيين السلسلة الأولى كبداية
//     let shortestLength = str1.length;  // الحصول على طول السلسلة الأولى

//     // مقارنة باقي السلاسل مع السلسلة الأولى
//     const strings = [str2, str3, str4, str5];  // وضع السلاسل في مصفوفة للتكرار عليها

//     for (let str of strings) {
//     if (str.length < shortestLength) {
//         shortest = str;
//         shortestLength = str.length;
//     }
//     }

//     return shortest;
// }

//   console.log(shorterString("air", "school", "car", "by", "github"));  // ستطبع "by"
//   console.log(shorterString("air", "tr", "car", "by", "github"));      // ستطبع "tr"
//   console.log(shorterString("by", "tr", "car", "air", "github"));      // ستطبع "by"
//   console.log(shorterString("air", "by", "car", "school", "github")); // ستطبع "by"
//   console.log(shorterString("air", "tr", "by", "car", "github"));      // ستطبع "by"
//   console.log(shorterString("air", "tr", "car", "github", "by"));      // ستطبع "by"

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1, str2, str3, str4) {
    if (str1.length >= str2.length && str1.length >= str3.length && str1.length >= str4.length) {
    return str1;
    } else if (str2.length >= str1.length && str2.length >= str3.length && str2.length >= str4.length) {
    return str2;
    } else if (str3.length >= str1.length && str3.length >= str2.length && str3.length >= str4.length) {
    return str3;
    } else {
    return str4;
    }
}
console.log(longerString("air", "school", "car", "github"));      
console.log(longerString("air", "schoo", "car", "github"));      
console.log(longerString("github", "car", "air", "school"));     
console.log(longerString("school", "car", "github", "air"));    
console.log(longerString("car", "school", "github", "air"));   
console.log(longerString("air", "github", "car", "school"));  //في حال كانو منفس الطول فهو بياخد حسب الترتيب يعني اول اشي الي هي str2  
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(num) {
    if( num %2===0){ return true}
    else if( num %2!=0){return false}
}
console.log(isEven(1));
console.log(isEven(2));
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(number) {
    if (number % 2 != 0) {
      return true;  // إذا كان العدد فرديًا
    } else {
      return false; // إذا كان العدد زوجيًا
    }
}

console.log(isOdd(4));  
console.log(isOdd(5));  
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(num) {
    return (Math.abs(num));
    //بتعطي قيمة مطلقة
}
console.log(positive(4));
console.log(positive(-5));//القيمة المطلقة للصفر هي صفر

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
// function fullName (firstName,lastName) {
// return `${firstName} ${lastName}`;
// }
// console.log(fullName("Adam","McCallen"));
// console.log(fullName("Alex", "Mercer"))
function fullName(firstName, lastName) {
    return `"${firstName} ${lastName}"`;
}
let m=fullName("Adam", "McCallen")
console.log(m); 
console.log(fullName("Alex", "Mercer"));   

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
// function average(num1,num2,num3,num4,num5) {
//     const sum = num1 + num2 + num3 + num4 + num5;

//     return sum/5
// }

// console.log(average(1,2,3,4,5))
// console.log((5,7,9,3,5))
function average(num1, num2, num3, num4, num5) {
const sum = num1 + num2 + num3 + num4 + num5;

const avg = sum / 5;
return avg;
}

console.log(average(1, 2, 3, 4, 5));  
console.log(average(5, 7, 9, 3, 5));  
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN  هذه الدالة تقوم بإرجاع قيمة عشوائية بين 0 (شاملة) 
و 1 (غير شاملة)، أي أن الرقم العشوائي سيكون دائمًا أصغر من 1 ولكن قد يكون قريبًا جدًا من 1.

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
    return Math.random ();
}
console.log(randomNumber());

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(num1,num2) {
    return Math.random() * (num2 - num1) + num1;
}
console.log(randomBetweenNumbers(1,8));
console.log(randomBetweenNumbers(3,100));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(num) {
    if (num>=95 && num<=100) {
        return 'A';
    }
    else if (num>=85 && num<=94) {
        return 'B';
    }
    else if (num>=70 && num<=84) {
        return 'C';
    }
    else if (num>=50 && num<=69) {
        return 'D';
    }
    else if (num>=0 && num<=49) {
        return 'F';
    }
}
console.log(scoreInUniversty(96));
console.log(scoreInUniversty(3));
console.log(scoreInUniversty(71));
//حل آخر
// function scoreInUniversty(score) {
//     // تحويل الدرجة إلى فئة مناسبة عبر تحديد الفئات بالنطاقات
//     switch (true) {
//       case (score >= 95 && score <= 100):
//         return "A";
//       case (score >= 85 && score <= 94):
//         return "B";
//       case (score >= 70 && score <= 84):
//         return "C";
//       case (score >= 50 && score <= 69):
//         return "D";
//       case (score >= 0 && score <= 49):
//         return "F";
//     }
//   }

//   // اختبار الوظيفة
//   console.log(scoreInUniversty(96));  // مثال: "A"
//   console.log(scoreInUniversty(3));   // مثال: "F"
//   console.log(scoreInUniversty(71));  // مثال: "C"

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
// function counter () {
//     let count=0;
//     return function(){
//         count++;
//         return count;
//     }
    
// }
// const ra=counter ();
// console.log(ra ());
// console.log(ra ());
// console.log(ra ());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
let count = 0; 


function counter() {
count += 1;
return count;
}


function resetCounter() {
let previousCount = count;
  count = 0; // إعادة ضبط العداد إلى 1
  return previousCount + " and the counter reset now"; // إرجاع القيمة القديمة مع رسالة
}

// اختبار الدوال:
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log(resetCounter());
console.log(counter()); 
console.log(counter());
console.log(resetCounter()); 
console.log(counter());