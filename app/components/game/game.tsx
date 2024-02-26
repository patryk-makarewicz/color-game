'use client';

import { useTranslation } from '@/i18n/client';

export const Game = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  return (
    <div>
      <h1>Content</h1>
    </div>
  );
};
