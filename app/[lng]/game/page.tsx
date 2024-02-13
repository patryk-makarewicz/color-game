import { lngProps } from '@/[lng]/page';

import { useTranslation } from '@/i18n';

const GamePage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h3>{t('page.game.description')}</h3>
    </div>
  );
};

export default GamePage;
