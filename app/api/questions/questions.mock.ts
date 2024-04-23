import { request } from '../request';
import { QuestionsDTO } from './questions.model';

export const getQuestionsListMock = () => {
  return request<QuestionsDTO>([
    {
      id: '1',
      question: 'Który z kolorów to white?',
      options: ['czerwony', 'biały', 'żółty', 'zielony'],
      goodAnswer: 'biały'
    },
    {
      id: '2',
      question: 'Który z kolorów to black?',
      options: ['czarny', 'niebieski', 'fioletowy', 'czerwony'],
      goodAnswer: 'czarny'
    },
    {
      id: '3',
      question: 'Który z kolorów to blue?',
      options: ['żółty', 'zielony', 'czerwony', 'niebieski'],
      goodAnswer: 'niebieski'
    },
    {
      id: '4',
      question: 'Który z kolorów to red?',
      options: ['biały', 'czarny', 'czerwony', 'fioletowy'],
      goodAnswer: 'czerwony'
    },
    {
      id: '5',
      question: 'Który z kolorów to yellow?',
      options: ['żółty', 'zielony', 'niebieski', 'czarny'],
      goodAnswer: 'żółty'
    },
    {
      id: '6',
      question: 'Który z kolorów to green?',
      options: ['niebieski', 'zielony', 'fioletowy', 'biały'],
      goodAnswer: 'zielony'
    },
    {
      id: '7',
      question: 'Który z kolorów to purple?',
      options: ['fioletowy', 'czerwony', 'żółty', 'czarny'],
      goodAnswer: 'fioletowy'
    }
  ]);
};
