'use client';

import { useEffect, useState } from 'react';

import { useTranslation } from '@/i18n/client';

const game = [
  {
    id: '1',
    question: '1. Jaki jest numer pytania?',
    options: ['4', '1', '2', '3'],
    goodAnswer: '1'
  },
  {
    id: '2',
    question: '2. Jaka jest litera jest pierwsza w alfabecie?',
    options: ['B', 'C', 'A', 'D'],
    goodAnswer: 'A'
  },
  {
    id: '3',
    question: '3. Jak mam na imię?',
    options: ['Zuzina', 'Kapista', 'Kotek', 'Patek'],
    goodAnswer: 'Patek'
  }
];

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
      <h1>Content</h1>
      {currentQuestion < game.length && <h3>Time left: {timer} seconds</h3>}
      <h3>Your points: {points}</h3>
      {currentQuestion < game.length && (
        <div key={game[currentQuestion].id}>
          <div>{game[currentQuestion].question}</div>
          <div className="flex gap-3">
            {game[currentQuestion].options.map((option, idx) => (
              <button key={idx} onClick={() => handleClickAnswer(option, game[currentQuestion].goodAnswer)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
