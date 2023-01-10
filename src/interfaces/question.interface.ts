export interface IVoteDetail {
  userId: number;
  questionId: string;
  voteType: string;
}

export interface IVote {
  count: number;
  row: IVoteDetail[];
}

export interface ITagQuestionDetail{
id: number;
name: string;
createdAt: string;
updatedAt: string;
}

export interface IQuestionDetail {
  id: string;
  title: string;
  textContent: string;
  codeContent: string;
  userId: number;
  tagId: number;
  createdAt: string;
  updatedAt: string;
  tag: ITagQuestionDetail;
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

export interface IUserCheckVoteDetail {
  user: string;
  status: string;
}

export interface IUserCheckVote {
  data: IUserCheckVoteDetail[];
}

export interface IQuestionId {
  questionId: string;
}

export interface IVoteDetail {
  username: string;
  status: string;
}
