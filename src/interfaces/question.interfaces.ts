export interface IQuestionDetail {
  id: number;
  title: string;
  textContent: string;
  codeContent: string;
  tag?: ITag;
  createdAt?: string;
}

export interface IQuestion {
  data: IQuestionDetail[];
}

export interface ITag {
  id?: number;
  name: string;
}
