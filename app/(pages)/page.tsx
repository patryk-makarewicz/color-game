import Link from 'next/link';

import { Button } from '@/components/button';
import { Logo } from '@/components/logo/logo';
import { Description } from '@/components/typography/description/description';
import { Title } from '@/components/typography/title';
import { User } from '@/components/user';
import { useTranslation } from '@/i18n';
import { GameLayout } from '@/layouts/gameLayout';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <GameLayout>
        <Logo />
        <Title lng={lng} />
        <Description>{t('page.home.description')}</Description>
        <User lng={lng} />
        <Link href={`/results`}>
          <Button>{t('components.button.results')}</Button>
        </Link>
      </GameLayout>
    </main>
  );
};

export default Home;
