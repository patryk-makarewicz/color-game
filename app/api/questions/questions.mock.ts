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
    },
    {
      id: '4',
      question: 'Który z kolorów to czerwony?',
      options: ['white', 'black', 'red', 'purple'],
      goodAnswer: 'red'
    },
    {
      id: '5',
      question: 'Który z kolorów to żółty?',
      options: ['yellow', 'green', 'blue', 'black'],
      goodAnswer: 'yellow'
    },
    {
      id: '6',
      question: 'Który z kolorów to zielony?',
      options: ['blue', 'green', 'purple', 'white'],
      goodAnswer: 'green'
    },
    {
      id: '7',
      question: 'Który z kolorów to fioletowy?',
      options: ['purple', 'red', 'yellow', 'black'],
      goodAnswer: 'purple'
    }
  ]);
};
