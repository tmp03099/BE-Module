//import or require a module
const fs = require("fs"); //an obj
const request = require("request");

// !============= Request Package  ===================

request("http://jsonplaceholder.typicode.com/users", function (err, res, body) {
  if (err) {
    console.log(err);
  }
  // console.log(body);
});

// !============= Own Module  ===================
//import or require own module
const daysOfWeek = require("./days-of-week");

//using the daysOfWeek module
console.log(daysOfWeek.weekdays);
const day = daysOfWeek.getWeekday(5);
console.log(day);

//?==== random Module =====
const random = require("./utilities/random");
for (let i = 0; i < 10; i++) {
  console.log(random.assigned(100, 200));
}

//? =======circle Module ========
const circle = require("./utilities/circle");
console.log(circle.area(50)); // 7853.98...
console.log(circle.circumference(75)); // 471.23...

//!============ NODE FS Module ================
//write a new file
fs.writeFile("./hello.txt", "Hello world", function (e) {
  if (e) {
    //console.log(e)
    // creates an explicit error to stop our program
    throw Error(e.message);
  }
  console.log("Done writing file");
});

fs.appendFile("./hello.txt", "\nMore data", function () {
  console.log("Done");
});
