import generateRandomInRange from '../help.js';
import start from '../commonLogics.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstProgressionNumber, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstProgressionNumber + progressionStep * i);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = generateRandomInRange(5, 10);
  const firstProgressionNumber = generateRandomInRange(0, 20);
  const progressionStep = generateRandomInRange(1, 5);
  const progression = generateProgression(firstProgressionNumber, progressionStep, progressionLength);
  const randomPosition = generateRandomInRange(0, progressionLength - 1);
  const answer = String(progression[randomPosition]);
  progression.splice(randomPosition, 1, '..');
  const question = progression.join(' ');
  return [question, answer];
};

const startGame = () => start(description, generateRound);

export default startGame;
