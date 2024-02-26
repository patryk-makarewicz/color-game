import Link from 'next/link';

import { lngProps } from '@/[lng]/page';

import { Button } from '@/components/button';
import { Game } from '@/components/game';
import { Greetings } from '@/components/greetings';
import { useTranslation } from '@/i18n';

const GamePage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-3 flex w-96 flex-col items-center gap-6 rounded p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-appPrimary">{t('app')}</h3>
        <Greetings lng={lng} />
        <Game lng={lng} />
        <Link href={`/${lng}`} className="pb-6">
          <Button>{t('components.button.back')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default GamePage;
