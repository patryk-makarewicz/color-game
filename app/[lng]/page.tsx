import { useTranslation } from '@/i18n';

export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
  const { t } = await useTranslation(lng);

  return (
    <main className="min-h-screenflex-col flex items-center justify-center ">
      <h3>{t('page.home.greetings')}</h3>
    </main>
  );
};

export default Home;
