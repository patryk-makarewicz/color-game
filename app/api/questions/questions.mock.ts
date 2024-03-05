import { request } from '../request';
import { QuestionsDTO } from './questions.model';

export const getQuestionsListMock = () => {
  return request<QuestionsDTO>([
    {
      id: '1',
      question: 'Który z kolorów to biały?',
      options: ['red', 'white', 'yellow', 'green'],
      goodAnswer: 'white'
    },
    {
      id: '2',
      question: 'Który z kolorów to czarny?',
      options: ['black', 'blue', 'purple', 'red'],
      goodAnswer: 'black'
    },
    {
      id: '3',
      question: 'Który z kolorów to niebieski?',
      options: ['yellow', 'green', 'red', 'blue'],
      goodAnswer: 'blue'
    }
  ]);
};
