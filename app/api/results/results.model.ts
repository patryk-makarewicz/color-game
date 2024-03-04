export type ResultModel = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    points: number;
  };
};

export type ResultsListDTO = {
  records: ResultModel[];
};
