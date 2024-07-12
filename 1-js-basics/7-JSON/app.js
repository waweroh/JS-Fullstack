// JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used for transmitting data between a server and a web application, as well as for storing configuration settings and data.

// In JavaScript, JSON is represented as a string, and it closely resembles JavaScript object literal notation. It consists of key-value pairs, where keys must be strings, and values can be strings, numbers, booleans, arrays, or nested objects. The key-value pairs are separated by commas, and the entire JSON object is enclosed in curly braces {}.

// -----------------------
// JavaScript provides methods to work with JSON data:

// JSON.stringify(): converts js object to a json string
// JSON.parse(): parses a json string and returns a js object

const person = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isSubscribed: true,
  hobbies: ["Reading", "Running", "Cooking"],
  address: {
    city: "New York",
    zipCode: "10001",
  },
};

//JSON.stringify() -convert to json
const toJson = JSON.stringify(person);
const toObject = JSON.parse(toJson);

console.log(toJson);
console.log(toObject);