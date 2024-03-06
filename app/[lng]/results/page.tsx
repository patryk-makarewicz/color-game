import Link from 'next/link';

import { lngProps } from '@/[lng]/page';

import { getResultsList } from '@/api/results/results.api';
import { Button } from '@/components/button';
import { Results } from '@/components/results';
import { useTranslation } from '@/i18n';

const ResultsPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);
  const results = await getResultsList();

  return (
    <div className="m-auto flex min-h-screen w-fit max-w-md  flex-col items-center justify-center gap-6 p-2">
      <h3 className="text-2xl font-bold text-appPrimary">{t('app')}</h3>
      <p className="text-lg">{t('page.results.description')}</p>
      <Results results={results} lng={lng} />
      <Link href={`/${lng}`} className="pb-6">
        <Button>{t('components.button.back')}</Button>
      </Link>
    </div>
  );
};

export default ResultsPage;
