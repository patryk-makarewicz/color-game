'use client';

import Link from 'next/link';

import { colorClasses } from '@/helpers/colorsClasses';
import { useEffect, useState } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useQuestionsList } from '@/hooks/useQuestionsList';
import { useSaveResult } from '@/hooks/useSaveResult';
import { useTranslation } from '@/i18n/client';

import { Button } from '../button';

export const Game = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(30);
  const [userName] = useLocalStorage('color-game-user', '');

  const { data, isPending, isError } = useQuestionsList();
  const { mutate: saveUserResult, isPending: isSaveUserResultPending } = useSaveResult();

  const handleClickAnswer = (option: string, goodAnswer: string) => {
    if (option === goodAnswer) {
      setPoints((prev) => prev + 1 + timer);
      setCurrentQuestion((prevIndex) => prevIndex + 1);
    } else {
      setPoints((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleSaveResult = () => {
    saveUserResult({
      records: [
        {
          fields: {
            name: userName,
            points
          }
        }
      ]
    });
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

      {currentQuestion === data.length && (
        <>
          <p className="mb-2 text-lg">
            <span className="font-bold text-appPrimary">{userName}</span> {t('page.game.congrats')}
          </p>
          <div className="m-auto mb-3 w-fit">
            <Button kind="secondary" disabled={isSaveUserResultPending} onClick={handleSaveResult}>
              {isSaveUserResultPending ? t('page.game.sendingResult') : t('page.game.sendResult')}
            </Button>
          </div>
        </>
      )}

      <div className="m-auto w-fit">
        <Link href={`/${lng}`} className="pb-6">
          <Button disabled={isSaveUserResultPending}>{t('components.button.back')}</Button>
        </Link>
      </div>
    </div>
  );
};
