'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { Button } from '@/components/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTranslation } from '@/i18n/client';

export const User = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [inputValue, setInputValue] = useLocalStorage('color-game-user', '');
  const [disabledButton, setDisabledButton] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setDisabledButton(inputValue.length < 3);
  }, [inputValue]);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <input
        type="text"
        className="w-full rounded border border-gray-300 p-2"
        placeholder={t('page.home.label')}
        value={inputValue}
        onChange={handleInputChange}
        minLength={3}
        maxLength={20}
      />
      <Link href={`/${lng}/game`}>
        <Button disabled={disabledButton}>{t('components.button.start')}</Button>
      </Link>
    </div>
  );
};
