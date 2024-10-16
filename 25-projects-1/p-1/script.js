// write a program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100;

// function isEqualTo100(val1,val2){

//     if(val1 === 100 || val2 === 100) return true;

//     if(val1 + val2 === 100) {
//         return true;
//     } else {
//         return false;
//     };

// };

const isEqualTo100 = ( val1, val2 ) => 
    val1 === 100 || val2 === 100 || (val1+val2) === 100;

console.log(isEqualTo100(100,30));
console.log(isEqualTo100(10,100));
console.log(isEqualTo100(50,50));
console.log(isEqualTo100(50,30));


// write a program to get the extension of a filename

// function getFileExtension(file) {
//     return file.slice(file.lastIndexOf("."));
// };

const getFileExtension = (file) => file.slice(file.lastIndexOf("."));

console.log(getFileExtension("index.html"));

// write a javascript program to replace every character in a given string with the character following it in the alphabet 

// function moveCharFor(str){
//     return  str.split("")
//     .map((char)=> String.fromCharCode(char.charCodeAt(0)+1) )
//     .join("")
// };

const moveCharFor = (str) => str.split("").map( char => String.fromCharCode(char.charCodeAt(0)+1)).join("")
console.log(moveCharFor("abcdef"));

// write a javascript program to get the current date.
// Expected output:
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function formattedDate(date = new Date( )) {

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
};

console.log(formattedDate());

// write a javascript program to  create a new string adding "New!" in front of a given string. if the given string begins with "New!" already then return the original string.

// function addNew(str) {

//     const New = "New!";

//     if(str.startsWith("New!")) {
//         return str;
//     } else {
//         return `${New} ${str}`
//     }; 
    
// }

const addNew = (str) => str.indexOf("New!") === 0 ? str : `New! ${str}`;

console.log(addNew("New! Offers"));