import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { QuestionsAPI } from '@/api';
import { QueryKey } from '@/api/queryKeys';
import { shuffleArray } from '@/utils/shuffleArray';

export const useQuestionsList = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: [QueryKey.loadQuestions],
    queryFn: QuestionsAPI.getQuestionsList
  });

  return {
    data: useMemo(() => (data ? shuffleArray(data) : []), [data]),
    rawData: data ?? [],
    isPending,
    isError
  };
};
