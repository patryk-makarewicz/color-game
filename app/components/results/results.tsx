import { ResultsListDTO } from '@/api/results/results.model';
import { useTranslation } from '@/i18n';
import { formatDate } from '@/utils/date';

type ResultsProps = {
  results: ResultsListDTO;
  lng: string;
};

export const Results = async ({ results, lng }: ResultsProps) => {
  const { t } = await useTranslation(lng);

  if (!results || results.records.length === 0) {
    return <p className="text-lg text-appPrimary">{t('page.results.noResults')}</p>;
  }

  return (
    <table className="table-fixed border-separate border-spacing-3">
      <thead className="border border-t-2 border-slate-600">
        <tr className="text-left">
          <th>{t('page.results.position')}</th>
          <th>{t('page.results.name')}</th>
          <th>{t('page.results.points')}</th>
          <th>{t('page.results.date')}</th>
        </tr>
      </thead>
      <tbody>
        {results.records.map((player, idx) => (
          <tr key={player.id}>
            <td>{idx + 1}</td>
            <td>{player.fields.name}</td>
            <td>{player.fields.points}</td>
            <td>{formatDate(player.createdTime)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
