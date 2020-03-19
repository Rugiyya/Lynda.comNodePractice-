const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is you name?",
  "Where do you live?",
  "What are you going to do with node js ?"
];



collectAnswers(questions, answers => {
  console.log("Thank you for your anwers.");
  console.log(answers);
  process.exit();
});