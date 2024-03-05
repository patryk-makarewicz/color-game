import axios from 'axios';

import { useAPImocks } from '../config';
import { getQuestionsListMock } from './questions.mock';
import { QuestionsDTO } from './questions.model';

export const getQuestionsList = () =>
  !useAPImocks ? getQuestionsListMock() : axios.get<QuestionsDTO>('/api/questions').then(({ data }) => data);

//TODO - get questions from db
