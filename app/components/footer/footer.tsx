import { useTranslation } from '@/i18n';

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="relative bg-white">
      <div className="mx-auto flex max-w-md items-center justify-center border-t border-appGrayLight p-2.5">
        <p className="text-center text-xs text-appGray" data-testid="copyright">
          {t('footer.copyright', { year: year })}
        </p>
      </div>
    </footer>
  );
};
