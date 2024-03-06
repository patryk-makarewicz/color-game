import { useTranslation } from '@/i18n';

export const Title = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return <h1 className="text-2xl font-bold text-appPrimary">{t('app')}</h1>;
};
