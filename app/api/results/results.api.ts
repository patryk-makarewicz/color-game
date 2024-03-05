import axios from 'axios';

import { BASE_URL, headers, useAPImocks } from '../config';
import { getResultsListMock } from './results.mock';
import { ResultsListDTO, UserResultModel } from './results.model';

export const getResultsList = async (): Promise<ResultsListDTO> => {
  if (useAPImocks) {
    return getResultsListMock();
  } else {
    const response = await fetch(
      `${BASE_URL}/results?view=default&sort%5B0%5D%5Bfield%5D=points&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=10`,
      {
        headers,
        cache: 'no-cache'
      }
    );

    return response.json();
  }
};

export const postUserResult = (data: UserResultModel): Promise<UserResultModel> => {
  return axios.post<UserResultModel>(`${BASE_URL}/results`, data, { headers }).then(({ data }) => data);
};
