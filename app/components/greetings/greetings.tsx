'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTranslation } from '@/i18n/client';

export const Greetings = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [userName] = useLocalStorage('color-game-user', '');

  return <p className="text-lg">{t('page.game.greetings', { user: userName })}</p>;
};
