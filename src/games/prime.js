import generateRandomInRange from '../help.js';
import start from '../commonLogics.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const number = generateRandomInRange(1, 500);
  const question = `${number}`;
  const answer = isPrime(number);
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;
