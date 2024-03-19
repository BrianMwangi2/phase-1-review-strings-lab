// Write your code in this file!
/*
let currentUser=`Brian`;

console.log(currentUser);

let welcomeMessage="Welcome to Flatbook, ";
 welcomeMessage="Welcome to Flatbook," `${currentUser}`;
 console.log(welcomeMessage);
*/
const currentUser = `Brian`;

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage =  welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;