import generateRandomInRange from '../help.js';
import start from '../commonLogics.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  while (b !== 0) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const generateRound = () => {
  const firstNumber = generateRandomInRange(0, 100);
  const secondNumber = generateRandomInRange(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGcd(firstNumber, secondNumber));
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;
