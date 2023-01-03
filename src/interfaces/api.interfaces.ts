export interface IParamQuestion {
    title: string;
    textContent: string;
    codeContent: string;
    tagName: string;
}
export interface IQuestionDetail{
    name:string;
    textContent:string;
    codeContent:string;
}

export interface IQuestion{
    data: IQuestionDetail[]
}