'use client';

import { useEffect, useState } from 'react';

import { useQuestionsList } from '@/hooks/useQuestionsList';
import { useTranslation } from '@/i18n/client';

const colorClasses: { [key: string]: string } = {
  red: 'bg-red-500',
  white: 'bg-white',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  black: 'bg-black',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500'
};

export const Game = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(30);

  const { data, isPending, isError } = useQuestionsList();

  const handleClickAnswer = (option: string, goodAnswer: string) => {
    if (option === goodAnswer) {
      setPoints((prev) => prev + 1 + timer);
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    } else {
      setPoints((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    if (currentQuestion >= data.length) {
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
  }, [currentQuestion]);

  if (isPending) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Error, refresh page please</p>
      </div>
    );
  }

  return (
    <div>
      {currentQuestion < data.length && (
        <div>
          <h3>Time left: {timer} seconds</h3>
        </div>
      )}
      <h3>Your points: {points}</h3>
      {currentQuestion < data.length && (
        <div key={data[currentQuestion].id}>
          <div className="h-2 animate-progress rounded-md bg-appPrimary" />
          <div>{data[currentQuestion].question}</div>
          <div className="flex gap-3">
            {data[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleClickAnswer(option, data[currentQuestion].goodAnswer)}
                className="flex gap-1">
                <div className={`h-6 w-6 rounded-full border ${colorClasses[option]}`} /> {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
