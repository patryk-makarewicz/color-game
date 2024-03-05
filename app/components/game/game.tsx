'use client';

import { colorClasses } from '@/helpers/colorsClasses';
import { useEffect, useState } from 'react';

import { useQuestionsList } from '@/hooks/useQuestionsList';
import { useTranslation } from '@/i18n/client';

import { Congrats } from '../congrats';

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
  }, [currentQuestion, isPending]);

  if (isPending) {
    return <p className="text-lg text-appPrimary">{t('page.game.loading')}</p>;
  }

  if (isError) {
    return <p className="text-center text-lg text-appPrimary">{t('page.game.error')}</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-center">
        {t('page.game.points')}: <span className="font-semibold text-appPrimary">{points}</span>
      </p>

      {currentQuestion < data.length && (
        <>
          <div className="mb-4">
            <p className="text-center">
              {t('page.game.timeLeft')}: <span className="font-semibold text-appPrimary">{timer}</span>
            </p>
            <div key={data[currentQuestion].id} className="h-2 animate-progress rounded-md bg-appPrimary" />
          </div>
          <div key={data[currentQuestion].id} className="mb-4">
            <p className="mb-3 text-center">{data[currentQuestion].question}</p>
            <div className="flex gap-3">
              {data[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleClickAnswer(option, data[currentQuestion].goodAnswer)}
                  className="flex gap-1 duration-300 ease-in-out hover:opacity-70">
                  <div className={`h-6 w-6 rounded-full border ${colorClasses[option]}`} /> {option}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {currentQuestion === data.length && <Congrats lng={lng} />}
    </div>
  );
};
