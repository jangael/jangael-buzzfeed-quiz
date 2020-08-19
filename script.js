//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var unicornScore = 0;
var penguinScore = 0;
var dogScore = 0;
var ladybugScore = 0;
var result = document.getElementById("result");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//#TODO: Use the DOM to create variables for the second quiz question.
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//#TODO: Use the DOM to create variables for the third quiz question.
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//#TODO: Use the DOM to create variables for the fourth quiz question.
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//#TODO: Use the DOM to create variables for the fourth quiz question.
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", unicorn);
q1a2.addEventListener("click", penguin);
q1a3.addEventListener("click", dog);
q1a4.addEventListener("click", ladybug);

q2a1.addEventListener("click", unicorn);
q2a2.addEventListener("click", penguin);
q2a3.addEventListener("click", dog);
q2a4.addEventListener("click", ladybug);

q3a1.addEventListener("click", unicorn);
q3a2.addEventListener("click", penguin);
q3a3.addEventListener("click", dog);
q3a4.addEventListener("click", ladybug);

q4a1.addEventListener("click", unicorn);
q4a2.addEventListener("click", penguin);
q4a3.addEventListener("click", dog);
q4a4.addEventListener("click", ladybug);

q5a1.addEventListener("click", unicorn);
q5a2.addEventListener("click", penguin);
q5a3.addEventListener("click", dog);
q5a4.addEventListener("click", ladybug);

//#TODO: Define quiz functions here, alerts are suppose to be puns and refrences
function unicorn() {
  // 1. increment unicorn point
  unicornScore += 1;
  // 2. increment question count
  questionCount += 1;
  // alert("Yay! PuRPle Fluffy Unicorn Dancing on Rainbows!");
  if (questionCount >= 5) {
    displayResult();
  }
}

function penguin() {
  // 1. increment unicorn point
  penguinScore += 1;
  // 2. increment penguin point
  questionCount += 1;
  // alert("Waddle I do Without You! Penguin!");
  if (questionCount >= 5) {
    displayResult();
  }
}

function dog() {
  dogScore += 1;
  questionCount += 1;
  // alert("Roof! Roof! Who Let the Dogs Out?");
  if (questionCount >= 5) {
    displayResult();
  }
}
function ladybug() {
  ladybugScore += 1;
  questionCount += 1;
  // alert("Spot on! You got LadyBug!");
  if (questionCount >= 5) {
    displayResult();
  }
}

//* RESULTS

function displayResult() {
  if (unicornScore >= 3) {
    result.innerHTML =
      "Purple Unicorn! You’re very outgoing and energetic. You always stand out in a crowd with your magical energy. You’re also very spontaneous and a risk-taker. ";
  } else if (penguinScore >= 3) {
    result.innerHTML =
      "Penguin! You’re very active and fun to be around with. You may be aggressive but gentle at the same time. You’re also very resourceful and witty when met with a challenge.";
  } else if (dogScore >= 3) {
    result.innerHTML =
      "Dog! You’re very loyal and trustworthy. Anyone can trust you with their secrets and won’t have to worry about them spilling out. You can adapt to any environment and you are always curious about the unknown";
  } else if (ladybugScore >= 3) {
    result.innerHTML =
      "Ladybug! You enjoy the small things in life. You also like to see the good in things. You’re also very empathetic and caring towards others and the things you care most.";
  } else {
    result.innerHTML = "That's a mismatch...try again?";
  }
}
