import { useTranslation } from '@/i18n';

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="relative border-t border-appGrayLight bg-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center p-2.5">
        <p className="text-center text-sm" data-testid="copyright">
          {t('footer.copyright', { year: year })}
        </p>
      </div>
    </footer>
  );
};
