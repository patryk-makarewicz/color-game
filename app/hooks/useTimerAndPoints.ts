import { useEffect, useState } from 'react';

import { QuestionsDTO } from '@/api/questions/questions.model';

type useTimerProps = {
  questionsList: QuestionsDTO;
  isQuestionsListPending: boolean;
};

export const useTimerAndPoints = ({ questionsList, isQuestionsListPending }: useTimerProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(30);
  const [points, setPoints] = useState(0);

  const handleSetNextCurrentQuestion = () => {
    setCurrentQuestion((prevIndex) => prevIndex + 1);
  };

  const handleAddPoints = () => {
    setPoints((prev) => prev + 1 + timer);
  };

  const handleDeductPoints = () => {
    setPoints((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    if (currentQuestion >= questionsList.length) {
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
