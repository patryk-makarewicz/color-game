'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTranslation } from '@/i18n/client';

export const Congrats = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [userName] = useLocalStorage('color-game-user', '');

  return (
    <p className="text-lg">
      <span className="font-bold text-appPrimary">{userName}</span> {t('page.game.congrats')}
    </p>
  );
};
