let firstName = 'John';
let lastName = 'George';

//1. concatenate
let fullName = firstName.concat(lastName);
console.log(fullName);

//2. append
firstName+= ' do you know';
console.log(firstName);

//3. check length
console.log(firstName.length);

//4. cases
console.log(firstName.toUpperCase());

//5. slice 
console.log(firstName.slice(0, firstName.length))
console.log(firstName.slice(0, 4))

// 6. split and join
console.log(firstName.split('').join('')); //split makes it an array join makes it a string

// 7. includes
console.log(firstName.includes('e'));

// 8. trim
console.log(firstName.trim());

// backticks = prints it as it is 
let desc = `this is
a list 1
2
`
console.log(desc);

    // template literals
let hisName = `${firstName} ${lastName}`;
console.log(hisName);

//Exercise 
let favActorFirstName = 'Jason';
let favActorLastName = 'Statham';
let favActorFullName = favActorFirstName.concat(favActorLastName);
console.log(favActorFullName)
uppercase = favActorFullName.toUpperCase();
let message = `My favorite actor is ${uppercase}}. Action movies`;
console.log(message)
message+= 'his best show is Silicon Valley';
console.log(message);
