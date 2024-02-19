import Link from 'next/link';

import { Button } from '@/components/button';
import { useTranslation } from '@/i18n';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <main className="flex h-screen items-center justify-center bg-gray-50">
      <div className="flex w-96 flex-col items-center gap-6 rounded bg-white p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-appPrimary">{t('app')}</h3>
        <p className="text-lg">{t('page.home.description')}</p>
        <input type="text" className="w-full rounded border border-gray-300 p-2" placeholder={t('page.home.label')} />
        <Link href={`/${lng}/game`}>
          <Button>{t('page.home.button.start')}</Button>
        </Link>
        <Link href={`/${lng}/results`}>
          <Button>{t('page.home.button.results')}</Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
