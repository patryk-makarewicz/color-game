import { request } from '@/api/request';

import { ResultsListDTO } from './results.model';

export const getResultsListMock = () => {
  return request<ResultsListDTO>({
    records: [
      {
        id: 'recOOCGhyxR83tpnt',
        createdTime: '2021-11-03T11:06:10.000Z',
        fields: {
          name: 'Jogi',
          points: 99
        }
      },
      {
        id: 'recOOCGhyxR83ynpt',
        createdTime: '2021-11-04T11:07:10.000Z',
        fields: {
          name: 'User',
          points: 87
        }
      },
      {
        id: 'recOOCGhyxR83yaat',
        createdTime: '2021-11-05T11:07:10.000Z',
        fields: {
          name: 'Jan',
          points: 101
        }
      }
    ]
  });
};
