let val;
// Instanciate date object
// if you dont pass anything it will log current date by default
const today = new Date();

val = today;
console.log(val);

// Change to differnt date and time
// const birthday = new Date('12-31-1987 11:46:21');
// console.log(val);

// const birthday = new Date('December 31, 1987 11:46:21');
// console.log(val);

const birthday = new Date('12/31/1987');

val = birthday;
console.log(val);

// GEt day of month

val = today.getMonth();
console.log(val);
val = today.getDate();
console.log(val);
val = today.getDay();
console.log(val);
val = today.getFullYear();
console.log(val);
val = today.getHours();
console.log(val);
val = today.getMinutes();
console.log(val);
val = today.getSeconds();
console.log(val);
val = today.getMilliseconds();
console.log(val);

// Time Stamp amount of time passed since var today
val = today.getTime();

birthday.setMonth(1);
console.log(birthday);
birthday.setDate(05);
console.log(birthday);
birthday.setFullYear(2020);
console.log(birthday);
birthday.setMonth(2);
console.log(birthday);
birthday.setMonth(2);
console.log(birthday);
birthday.setMinutes(2);
console.log(birthday);
birthday.setSeconds(2);
console.log(birthday);