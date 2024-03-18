import { useEffect } from 'react';

export const useTimePassingSound = (currentQuestion: number, questionsListLength: number) => {
  const timePassingSound = new Audio('/tic-tac.mp3');

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    const playTimePassingSound = () => {
      timePassingSound.play();
      intervalId = setTimeout(playTimePassingSound, 1000);
    };

    if (currentQuestion === questionsListLength) {
      if (intervalId) {
        clearTimeout(intervalId);
        intervalId = undefined;
      }
    } else {
      playTimePassingSound();
    }

    return () => {
      if (intervalId) {
        clearTimeout(intervalId);
      }
    };
  }, [currentQuestion, questionsListLength]);
};
