import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question(' May I have your name? ');
  console.log(`Hello,${userName}!`);
  console.log('What is the result of the expression?');

  const operators = ['+', '-', '*'];

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomOperator = () => {
    return operators[getRandomInRange(0, operators.length - 1)];
  };

  const calculate = (number1, number2, operator) => {
    switch(operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
    }
};
  for (let i = 0; i < 3; i++) {
    const number1 = getRandomInRange(0, 100);
    const number2 = getRandomInRange(0, 100);
    const operator = getRandomOperator();

    const expectedAnswer = String(calculate(number1, number2, operator));

    console.log(`Question: ${number1} ${operator} ${number2}`);
    const userAnswer = readlineSync.question(' Your answer: ');

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${expectedAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
