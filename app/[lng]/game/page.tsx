import { lngProps } from '@/[lng]/page';

import { Game } from '@/components/game';
import { useTranslation } from '@/i18n';

const GamePage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-2 flex w-96 flex-col items-center gap-6">
        <h3 className="text-2xl font-bold text-appPrimary">{t('app')}</h3>
        <Game lng={lng} />
      </div>
    </div>
  );
};

export default GamePage;
