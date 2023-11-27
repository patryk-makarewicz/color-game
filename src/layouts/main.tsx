import Head from 'next/head';

import * as Styled from './main.styles';
import { PageLayout } from './pageLayout';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import GlobalStyles from '@/styles/GlobalStyles';

type LayoutProps = {
  children: React.ReactNode;
  loadingPage: boolean;
};

const Layout = ({ children, loadingPage }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Color Game</title>
        <meta name="description" content="Color Game - This is the color game for kids" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Color Game - This is the color game for kids" />
        <meta property="og:title" content="Color Game" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <GlobalStyles />
        <Styled.Container loadingPage={loadingPage}>
          <Header />
          <main>
            <PageLayout>{children}</PageLayout>
          </main>
          <Footer />
        </Styled.Container>
      </>
    </>
  );
};

export default Layout;
