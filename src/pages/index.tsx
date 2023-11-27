import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import * as Styled from '@/styles/home.styles';

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.Text>{t('greetings')}</Styled.Text>
      </Styled.Box>
    </Styled.Container>
  );
};

export const getServerSideProps = async ({ locale = 'en' }: { locale: string }) => {
  const translations = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      ...translations
    }
  };
};

export default Home;
