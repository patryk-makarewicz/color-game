'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTranslation } from '@/i18n/client';

export const User = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [inputValue, setInputValue] = useLocalStorage('color-game-user', '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      className="w-full rounded border border-gray-300 p-2"
      placeholder={t('page.home.label')}
      value={inputValue}
      onChange={handleInputChange}
      maxLength={20}
    />
  );
};
