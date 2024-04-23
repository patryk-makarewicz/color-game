import { useEffect, useState } from 'react';

type useTimerProps = {
  questionsAmount: number;
  isQuestionsListPending: boolean;
};

export const useTimerAndPoints = ({ questionsAmount, isQuestionsListPending }: useTimerProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(30);
  const [points, setPoints] = useState(0);

  const handleSetNextCurrentQuestion = () => {
    setCurrentQuestion((prevIndex) => prevIndex + 1);
  };

  const handleAddPoints = () => {
    setPoints((prev) => prev + 10 + timer);
  };

  const handleDeductPoints = () => {
    setPoints((prev) => Math.max(prev - 10, 0));
  };

  useEffect(() => {
    if (currentQuestion >= questionsAmount) {
      return;
    }

    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) return prevTimer - 1;
        clearInterval(interval);
        setCurrentQuestion((prevIndex) => prevIndex + 1);
        return 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQuestion, isQuestionsListPending]);

  return { currentQuestion, timer, handleSetNextCurrentQuestion, points, handleAddPoints, handleDeductPoints };
};
