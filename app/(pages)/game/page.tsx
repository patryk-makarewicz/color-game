import { lngProps } from '@/(pages)/page';

import { Game } from '@/components/game';
import { Title } from '@/components/typography/title';
import { useTranslation } from '@/i18n';
import { GameLayout } from '@/layouts/gameLayout';

const GamePage = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <main>
      <GameLayout>
        <Title lng={lng} />
        <Game lng={lng} />
      </GameLayout>
    </main>
  );
};

export default GamePage;
