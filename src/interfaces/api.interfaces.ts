export interface IParamQuestion {
    title: string;
    textContent: string;
    codeContent: string;
    tagName: string;
}

export interface IParamRegister {
    username: string;
    email: string;
    password: string;
}

export interface IParamLogin {
    username: string;
    password: string;
}
export interface IQuestionDetail{
    id?: number;
    title: string;
    textContent: string;
    codeContent: string;
    tag?: ITag;
    createdAt?: string;
}

export interface IQuestion{
    data: IQuestionDetail[]
}

export interface ITag {
    id?: number;
    name: string;
}

export interface IParamAuthContext {
    authed: boolean;
    setAuthed: (item: boolean) => void;
  }