import { QuestionsAPI } from '@/services';
import { QueryKey } from '@/services/queryKeys';
import { useQuery } from '@tanstack/react-query';

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
