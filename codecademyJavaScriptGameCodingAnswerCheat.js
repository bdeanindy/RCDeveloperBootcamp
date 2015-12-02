/*********************
THIS IS A CHEAT SHEET IN CASE ANYONE GETS TOTALLY STUCK AUTHORING THE GAME
IN JAVASCRIPT SKILL ON CODECADEMY. PLEASE ONLY USE IT IF YOU ARE TOTALLY STUCK.
*********************/


// Check if the user is ready to play!
confirm("Are you ready to play");

// Make sure they meet the age restriction
var age = prompt("What's your age?");
if( age < 13 ) {
    console.log("OK, you can play...but I'm not responsible for your actions");
} else {
    console.log("Enjoy the game!");
}

// Add some story
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

// Placeholder for user input to race me question
var userAnswer = prompt("Do you want to race Bieber on stage?");
// Conditional logic to handle user input from race me question
if (userAnswer) {
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
} else {
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

// Let's capture some feedback about our game
var feedback = prompt("Thanks for playing our game, could you please rate this game? 0 = Horrible, 10 = Godlike");
// Conditional logic to handle user feedback about game
if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
} else {
    console.log("I'll keep practicing coding and racing.");
}
