import { ResultsListDTO } from '@/api/results/results.model';

export const Results = ({ results }: { results: ResultsListDTO }) => {
  return (
    <ul>
      {results.records.map((player, idx) => (
        <li key={player.id}>
          {idx + 1}. {player.fields.name} - {player.fields.points} pkt.
        </li>
      ))}
    </ul>
  );
};
