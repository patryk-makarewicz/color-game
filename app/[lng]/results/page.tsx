import Link from 'next/link';

import { lngProps } from '@/[lng]/page';

import { getResultsList } from '@/api/results/results.api';
import { Button } from '@/components/button';
import { Results } from '@/components/results';
import { Description } from '@/components/typography/description/description';
import { Title } from '@/components/typography/title';
import { useTranslation } from '@/i18n';
import { GameLayout } from '@/layouts/gameLayout';

const ResultsPage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);
  const results = await getResultsList();

  return (
    <main>
      <GameLayout>
        <Title lng={lng} />
        <Description>{t('page.results.description')}</Description>
        <Results results={results} lng={lng} />
        <Link href={`/${lng}`} className="pb-6">
          <Button>{t('components.button.back')}</Button>
        </Link>
      </GameLayout>
    </main>
  );
};

export default ResultsPage;
