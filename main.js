//1 Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa,
//and 0 if they are equal.
/*
let a = prompt("Write the first number");
let b = prompt("Write the second number");

function compareNumbers(a, b) {
  if (a < b) {
    console.log("-1");
  } else if (a > b) {
    console.log("1");
  } else {
    console.log("0");
  }
}

compareNumbers(a, b);
*/

//2 Write a function that counts the factorial of a given number.
/*
let yourNumber = prompt("Please write a number");

function factorialOfNumber(n) {
  let result = 1;
  if (n == 0 || n == 1) {
    return result;
  } else if (n > 1) {
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  } else {
    return "number has to be positive.";
  }
}

result = factorialOfNumber(yourNumber);
console.log(`The factorial of ${yourNumber} is ${result}`);
*/

//3 Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
/*
let number1 = prompt("Please write the first number");
let number2 = prompt("Please write the second number");
let number3 = prompt("Please write the third number");

let createNumber = (a, b, c) => {
  return a + b + c;
};

let createdNumber = createNumber(number1, number2, number3);
console.log(`The final number is ${createdNumber}.`);
*/

//4 Write a function that accepts the width and length of a rectangle
//and calculates its area. If there is only one parameter given, it counts as a square.
/*
let widthRectangle = Number(prompt("Please write width of a rectangle"));
let lengthRectangle = Number(prompt("Please write length of a rectangle"));

let rectangleArea = (x, y) => {
  if (x > 0 && y > 0) {
    return x * y;
  } else if (x > 0 || y > 0) {
    return x * x + y * y;
  } else {
    return "no paremeters were given.";
  }
};

let answer = rectangleArea(widthRectangle, lengthRectangle);
console.log(`The final area is ${answer}.`);
*/

//5 Write a function that checks if the given number is perfect.
//A perfect number is a number equal to the sum of all its divisors.
//For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
/*
let yourNumber = Number(prompt("Please write a number"));

let perfectNumber = (a) => {
  let sum = 0;

  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }

  if (sum === a) {
    return true;
  } else {
    return false;
  }
};

console.log(
  perfectNumber(yourNumber)
    ? "It is a perfect number"
    : "It is not a perfect number"
);
*/

// 6 Write a function that accepts the min and max values of a range,
// and only puts out the perfect numbers within that range.
// Use the previous function to check, if numbers are perfect.
/*
let minNumber = Number(prompt("Please enter the min number"));
let maxNumber = Number(prompt("Please enter the max number"));

let perfectNumber = (a) => {
  let sum = 0;

  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }

  if (sum === a) {
    return true;
  } else {
    return false;
  }
};

let findPerfectNumbers = (x, y) => {
  for (let i = x; i < y; i++) {
    if (perfectNumber(i) === true) {
      console.log(`${i} is a perfect number`);
    }
  }
};

findPerfectNumbers(minNumber, maxNumber);
*/

//7 Write a function that accepts time (hours, minutes, seconds) and returns a string
//in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
/*
let hoursValue = prompt("Please enter hours");
let minutesValue = prompt("Please enter minutes");
let secondsValue = prompt("Please enter seconds");

let findTime = (hh, mm, ss) => {
  if (ss > 0) {
    return hh + ":" + mm + ":" + ss;
  } else {
    return hh + ":" + mm + ":00";
  }
};

console.log(findTime(hoursValue, minutesValue, secondsValue));
*/

//8 Write a function that accepts hours, minutes, and seconds and returns that time
//only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5143 seconds.
/*
let hoursValue = Number(prompt("Please enter hours"));
let minutesValue = Number(prompt("Please enter minutes"));
let secondsValue = Number(prompt("Please enter seconds"));

let findTimeinSeconds = (hh, mm, ss) => {
  return (hh * 60 + mm) * 60 + ss;
};

console.log(findTimeinSeconds(hoursValue, minutesValue, secondsValue));
*/

//9 Write a function that accepts the number of seconds, translates it into hours,
//minutes, and seconds, and returns as a hh:mm:ss string.
/*
let timeInSeconds = Number(prompt("Please enter time in seconds"));

let findSecondsToTime = (x) => {
  let hh = parseInt(x / 3600);
  let mm = parseInt((x - hh * 3600) / 60);
  let ss = x - hh * 3600 - mm * 60;
  return String(hh + ":" + mm + ":" + ss);
};

console.log(findSecondsToTime(timeInSeconds));
*/

//10 Write a function that counts the difference between the dates. The function
//accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss.
//While solving this problem use the functions from the two previous ones: at first,
//make the dates in seconds, count the difference in seconds, and translate it back into
//hh:mm:ss.
/*
let hoursValue1 = Number(prompt("Please enter hours"));
let minutesValue1 = Number(prompt("Please enter minutes"));
let secondsValue1 = Number(prompt("Please enter seconds"));

let hoursValue2 = Number(prompt("Please enter hours"));
let minutesValue2 = Number(prompt("Please enter minutes"));
let secondsValue2 = Number(prompt("Please enter seconds"));

let findTimeinSeconds = (hh, mm, ss) => {
  return (hh * 60 + mm) * 60 + ss;
};

let findSecondsToTime = (x) => {
  let hh = parseInt(x / 3600);
  let mm = parseInt((x - hh * 3600) / 60);
  let ss = x - hh * 3600 - mm * 60;
  return String(hh + ":" + mm + ":" + ss);
};

let timeDifference = (hh1, mm1, ss1, hh2, mm2, ss2) => {
  let firstTimeInSeconds = findTimeinSeconds(hh1, mm1, ss1);
  let secondTimeInSeconds = findTimeinSeconds(hh2, mm2, ss2);
  let timeInSeconds = Math.abs(firstTimeInSeconds - secondTimeInSeconds);

  return findSecondsToTime(timeInSeconds);
};

console.log(
  timeDifference(
    hoursValue1,
    minutesValue1,
    secondsValue1,
    hoursValue2,
    minutesValue2,
    secondsValue2
  )
);
*/
