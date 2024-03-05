import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { ResultsAPI } from '@/api';
import { QueryKey } from '@/api/queryKeys';
import { UserResultModel } from '@/api/results/results.model';

export const useSaveResult = () => {
  const { mutate, isSuccess, isError, isPending } = useMutation<UserResultModel, AxiosError, UserResultModel>({
    mutationFn: (data: UserResultModel) => ResultsAPI.postUserResult(data),
    mutationKey: [QueryKey.saveResult],
    onError: (error: AxiosError) => {
      console.error('Error:', error.message);
    }
  });

  return { mutate, isSuccess, isError, isPending };
};
