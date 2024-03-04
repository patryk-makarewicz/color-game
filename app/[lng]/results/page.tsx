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
    <div className="flex h-screen items-center justify-center ">
      <div className="mx-3 flex w-96 flex-col items-center gap-6 rounded p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-appPrimary">{t('app')}</h3>
        <p className="text-lg">{t('page.results.description')}</p>
        {!results && <p>No results</p>}
        {results && <Results results={results} />}
        <Link href={`/${lng}`} className="pb-6">
          <Button>{t('components.button.back')}</Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
