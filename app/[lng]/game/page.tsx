import { lngProps } from '@/[lng]/page';

import { Game } from '@/components/game';
import { useTranslation } from '@/i18n';

const GamePage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="m-auto flex min-h-screen w-fit max-w-sm flex-col items-center justify-center gap-6 p-2">
      <h3 className="text-2xl font-bold text-appPrimary">{t('app')}</h3>
      <Game lng={lng} />
    </div>
  );
};

export default GamePage;
