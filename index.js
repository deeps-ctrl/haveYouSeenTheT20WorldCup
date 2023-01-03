const readline = require("readline-sync");
const userName = readline.question("What is your name ? ");
console.log(`\nHey ${userName}\n`);

console.log(
  "Let's check whether you have seen the T20 world cup of 2022 or not ?\n"
);

const questions = [
  {
    question: "Who is the winner of t20 world cup of 2022 ?\n",
    answer: "England",
  },
  {
    question: "Who is the highest wicket taker of t20 world 2022 ?\n",
    answer: "Wanindu Hasaranga",
  },
  {
    question: "Which bowler has bowled most number of 150+ Kmh balls?\n",
    answer: "Mark Wood",
  },
  {
    question: "Who has won between India and Pakistan Match ?\n",
    answer: "India",
  },
  {
    question: "Which batsman has scored the highest runs in the tournament ?\n",
    answer: "Virat Kohli",
  },
];

let score = 0;
const askQuestion = (questionObj) => {
  const userAnswer = readline.question(questionObj.question);

  if (userAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
    console.log("Correct Answer\n");
    score += 1;
  } else {
    console.log("Wrong Answer\n");
  }
};

for (let i = 0; i < questions.length; i += 1) {
  askQuestion(questions[i]);
}

console.log(`Your final score is -> ${score}`);
