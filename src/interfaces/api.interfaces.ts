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
    name:string;
    textContent:string;
    codeContent:string;
}

export interface IQuestion{
    data: IQuestionDetail[]
}