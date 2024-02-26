'use client';

import { useState } from 'react';

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

  const handleClickAnswer = (option: string, goodAnswer: string) => {
    if (option === goodAnswer) {
      setPoints((prev) => prev + 1);
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    } else {
      setPoints((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div>
      <h1>Content</h1>
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
