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
export interface IQuestionDetail {
  id: string;
  title: string;
  textContent: string;
  codeContent: string;
}

export interface IQuestion {
  data: IQuestionDetail[];
}
export interface IUserInfor {
  username: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  isActive: boolean;
  codeVerify: string;
  interestedTags: string;
  isEnabledTwoFactorAuth: boolean;
}
export interface ICommentDetail {
  content: string;
  commentId: number;
  userId: number;
  postId: number;
  user: IUserInfor;
  createdAt: string;
}

export interface IComment {
  data: ICommentDetail[];
}

export interface IParamComment {
  content: string;
  postId: string;
}

export interface IVoteDetail {
  userId: number;
  questionId: string;
  voteType: string;
}
export interface IVote {
  count: number;
  row: IVoteDetail[];
}
export interface IParamVote {
  questionId: string;
  voteType: string;
}

export interface IUserCheckVoteDetail {
  user: string;
  status: string;
}
export interface IUserCheckVote {
  data: IUserCheckVoteDetail[];
}
