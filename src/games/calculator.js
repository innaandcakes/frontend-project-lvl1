import generateRandomInRange from '../help.js';
import start from '../commonLogics.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomOperator = () => operators[generateRandomInRange(0, operators.length - 1)];

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    default:
      return firstNumber * secondNumber;
  }
};

const generateRound = () => {
  const firstNumber = generateRandomInRange(0, 100);
  const secondNumber = generateRandomInRange(0, 100);
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = String(calculate(firstNumber, secondNumber, operator));
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;
