import Image from "next/image";
import { useTranslation } from '@/i18n';
export type lngProps = {
  params: {
    lng: string;
  };
};

const Home = async ({ params: { lng } }: lngProps) => {
    const { t } = await useTranslation(lng);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h3>{t('page.home.greetings')}</h3>
    </main>
  );
}

export default Home;