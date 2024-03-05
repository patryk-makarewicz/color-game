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

export type UserResultModel = {
  records: {
    fields: {
      name: string;
      points: number;
    };
  }[];
};
