import Link from 'next/link';

import { lngProps } from '@/[lng]/page';

import { Button } from '@/components/button';
import { useTranslation } from '@/i18n';

const ResultsPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="mx-3 flex w-96 flex-col items-center gap-6 rounded p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-appPrimary">{t('app')}</h3>
        <p className="text-lg">{t('page.results.description')}</p>
        <ul>
          <li>1. Kacper - 100 pkt.</li>
          <li>2. Zuzia - 100 pkt.</li>
          <li>3. Jogi - 100 pkt.</li>
        </ul>
        <Link href={`/${lng}`} className="pb-6">
          <Button>{t('components.button.back')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
