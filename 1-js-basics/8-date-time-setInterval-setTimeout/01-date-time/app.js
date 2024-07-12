//year, month, day, hour, minute, second, millisecond

// const currentDate = new Date(2024, 2, 1, 1, 21, 56);
// console.log(currentDate);
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth(); 
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(`year: ${year}`);
console.log(`month:  ${month}`);
console.log(`day:  ${day}`);
console.log(`hours:  ${hours}`);
console.log(`minutes:  ${minutes}`);
console.log(`seconds:  ${seconds}`);
console.log(`milliseconds:  ${milliseconds}`);

// Convert date to a string representation in different formats
console.log(date.toDateString()); // Output: Mon Jul 25 2023
console.log(date.toISOString()); // Output: 2023-07-25T00:00:00.000Z
console.log(date.toLocaleString()); // Output: 7/25/2023, 12:00:00 AM (based on the user's local timezone)

// Add 1 day to the current date
date.setDate(date.getDate() + 1);

// Subtract 2 hours from the current time
date.setHours(date.getHours() - 2);

console.log(date);


