import { useQuery } from '@tanstack/react-query';

import { QuestionsAPI } from '@/api';
import { QueryKey } from '@/api/queryKeys';

export const useQuestionsList = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: [QueryKey.loadQuestions],
    queryFn: QuestionsAPI.getQuestionsList
  });

  return {
    data: data ?? [],
    isPending,
    isError
  };
};
