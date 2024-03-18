import { Logo } from '@/components/logo/logo';
import { useTranslation } from '@/i18n';

export const Title = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  return (
    <h1 className="flex items-center gap-3 text-2xl font-bold text-appPrimary">
      <Logo /> {t('app')}
    </h1>
  );
};
