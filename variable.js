const accountId = 1234567890; // This is a constant variable that cannot be reassigned
let accountEmail = "kishan@gmail.com"
var accountPassword = "password123"
 accountCity = "New York" // This is a global variable that can be accessed from anywhere in the code

 let accountStata 

 // accountId = 9876543210; // This will cause an error because accountId is a constant variable
 accountEmail = "kishan123@gmail.com"
 accountPassword = "newpassword456"
 accountCity = "Los Angeles"


 /* 
 
 Prefer not to use var for variable declaration as it has function scope and can lead to unexpected behavior.
  Instead, use let for variables that may change and const for variables that should not change.
 
 */

 console.log(accountId);
    console.log(accountEmail);
    console.log(accountPassword);
    console.log(accountCity);
    console.table({accountId, accountEmail, accountPassword, accountCity, accountStata});