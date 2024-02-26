'use client';

import { useEffect, useState } from 'react';

import { useTranslation } from '@/i18n/client';

const game = [
  {
    id: '1',
    question: 'Który z kolorów to biały?',
    options: ['red', 'white', 'yellow', 'green'],
    goodAnswer: 'white'
  },
  {
    id: '2',
    question: 'Który z kolorów to czarny?',
    options: ['black', 'blue', 'purple', 'red'],
    goodAnswer: 'black'
  },
  {
    id: '3',
    question: 'Który z kolorów to niebieski?',
    options: ['yellow', 'green', 'red', 'blue'],
    goodAnswer: 'blue'
  }
];

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

  const handleClickAnswer = (option: string, goodAnswer: string) => {
    if (option === goodAnswer) {
      setPoints((prev) => prev + 1 + timer);
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    } else {
      setPoints((prev) => Math.max(prev - 1, 0));
    }
  };

  useEffect(() => {
    if (currentQuestion >= game.length) {
      return;
    }

    setTimer(30);
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) return prevTimer - 1;
        clearInterval(interval);
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion]);

  return (
    <div>
      {currentQuestion < game.length && (
        <div>
          <h3>Time left: {timer} seconds</h3>
        </div>
      )}
      <h3>Your points: {points}</h3>
      {currentQuestion < game.length && (
        <div key={game[currentQuestion].id}>
          <div className="animate-progress h-2 rounded-md bg-appPrimary" />
          <div>{game[currentQuestion].question}</div>
          <div className="flex gap-3">
            {game[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleClickAnswer(option, game[currentQuestion].goodAnswer)}
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
