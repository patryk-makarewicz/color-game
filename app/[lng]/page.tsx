import Link from 'next/link';

import { Button } from '@/components/button';
import { User } from '@/components/user';
import { useTranslation } from '@/i18n';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <main className="m-auto flex min-h-screen w-fit max-w-sm flex-col items-center justify-center gap-6 p-2">
      <h3 className="text-2xl font-bold text-appPrimary">{t('app')}</h3>
      <p className="text-center text-lg">{t('page.home.description')}</p>
      <User lng={lng} />
      <Link href={`/${lng}/results`}>
        <Button>{t('components.button.results')}</Button>
      </Link>
    </main>
  );
};

export default Home;
