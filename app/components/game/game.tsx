'use client';

import Link from 'next/link';

import { colorClasses } from '@/helpers/colorsClasses';
import { useClickSound } from '@/hooks/useClickSound';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useQuestionsList } from '@/hooks/useQuestionsList';
import { useSaveResult } from '@/hooks/useSaveResult';
import { useTimePassingSound } from '@/hooks/useTimePassingSound';
import { useTimerAndPoints } from '@/hooks/useTimerAndPoints';
import { useTranslation } from '@/i18n/client';

import { Button } from '../button';

export const Game = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [userName] = useLocalStorage('color-game-user', '');

  const { data: questionsList, isPending: isQuestionsListPending, isError: isQuestionsListError } = useQuestionsList();
  const { mutate: saveUserResult, isPending: isSaveUserResultPending } = useSaveResult();
  const { currentQuestion, timer, handleSetNextCurrentQuestion, points, handleAddPoints, handleDeductPoints } =
    useTimerAndPoints({
      questionsAmount: questionsList.length,
      isQuestionsListPending
    });

  const { playGoodAnswerSound, playErrorAnswerSound } = useClickSound();
  useTimePassingSound(currentQuestion, questionsList.length);

  const handleClickAnswer = (option: string, goodAnswer: string) => {
    if (option === goodAnswer) {
      handleAddPoints();
      handleSetNextCurrentQuestion();
      playGoodAnswerSound();
    } else {
      handleDeductPoints();
      playErrorAnswerSound();
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

  if (isQuestionsListPending) {
    return <p className="text-lg text-appPrimary">{t('page.game.loading')}</p>;
  }

  if (isQuestionsListError) {
    return <p className="text-center text-lg text-appPrimary">{t('page.game.error')}</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-center">
        {t('page.game.points')}: <span className="font-semibold text-appPrimary">{points}</span>
      </p>

      {currentQuestion < questionsList.length && (
        <>
          <div className="mb-4">
            <p className="text-center">
              {t('page.game.timeLeft')}: <span className="font-semibold text-appPrimary">{timer}</span>
            </p>
            <div key={questionsList[currentQuestion].id} className="h-2 animate-progress rounded-md bg-appPrimary" />
          </div>
          <div key={questionsList[currentQuestion].id} className="mb-4">
            <p className="mb-3 text-center">{questionsList[currentQuestion].question}</p>
            <div className="flex gap-3">
              {questionsList[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleClickAnswer(option, questionsList[currentQuestion].goodAnswer)}
                  className="flex gap-1 duration-300 ease-in-out hover:opacity-70">
                  <div className={`h-6 w-6 rounded-full border ${colorClasses[option]}`} /> {option}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {currentQuestion === questionsList.length && (
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
