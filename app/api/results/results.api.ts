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

export const postUserResult = async (data: UserResultModel): Promise<UserResultModel> => {
  const response = await fetch(`${BASE_URL}/results`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Something is wrong, network error');
  }

  return response.json();
};
