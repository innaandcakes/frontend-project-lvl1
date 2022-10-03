import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question(' May I have your name? ');
  console.log(`Hello,${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


  for (let i = 0; i < 3; i++) {
    const number = getRandomInRange(0, 100);
    const isEven = (number) => number % 2 === 0;
    const expectedAnswer = isEven(number) ? 'yes' : 'no';
    
    console.log(`Question: ${number}`);
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
