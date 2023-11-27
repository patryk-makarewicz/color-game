import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import { SpinnerOnLoad } from '@/helpers/spinnerOnLoad';
import MainLayout from '@/layouts/main';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoadingApp, setIsLoadingApp] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoadingApp(false);
    }
  }, []);

  if (isLoadingApp) {
    return <SpinnerOnLoad />;
  }

  return (
    <MainLayout loadingPage={isLoadingApp}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default appWithTranslation(MyApp);
