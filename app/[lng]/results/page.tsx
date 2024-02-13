import Link from 'next/link';

import { lngProps } from '@/[lng]/page';

import { Button } from '@/components/button';
import { useTranslation } from '@/i18n';

const ResultsPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h3>{t('page.results.description')}</h3>
      <Link href={`/${lng}`} className="pb-6">
        <Button>{t('page.results.back')}</Button>
      </Link>
    </div>
  );
};

export default ResultsPage;
