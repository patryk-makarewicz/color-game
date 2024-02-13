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
    <main className="flex h-screen flex-col items-center justify-center gap-3 ">
      <h3>{t('app')}</h3>
      <p>{t('page.home.description')}</p>
      <p>{t('page.home.label')}</p>
      <input type="text" className="rounded border border-appBlack" />
      <Link href={`/${lng}/game`} className="my-3">
        <Button>{t('page.home.button.start')}</Button>
      </Link>
      <Link href={`/${lng}/results`} className="my-3">
        <Button>{t('page.home.button.results')}</Button>
      </Link>
    </main>
  );
};

export default Home;
