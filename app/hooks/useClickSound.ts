export const useClickSound = () => {
  const goodAnswerSound = new Audio('/answer-good.mp3');
  const errorAnswerSound = new Audio('/answer-error.mp3');

  const playGoodAnswerSound = () => {
    goodAnswerSound.play();
  };

  const playErrorAnswerSound = () => {
    errorAnswerSound.play();
  };

  return { playGoodAnswerSound, playErrorAnswerSound };
};
