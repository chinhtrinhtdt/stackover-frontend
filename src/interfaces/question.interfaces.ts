export interface IVoteDetail {
  userId: number;
  questionId: string;
  voteType: string;
}

export interface IVote {
  count: number;
  row: IVoteDetail[];
}

export interface ITagQuestionDetail {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserQuestionDetail {
  id: string;
  username: string;
  password: string;
  email: string;
  name: string;
  isActive: boolean;
  codeVerify: string;
  interestedTags: string;
  location: string;
  isEnabled2FA: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITagQuestionDetail {
  id: number;
  name: string;
  createdAt: string;
  updatedAtL: string;
}

export interface IQuestionDetail {
  id: number;
  title: string;
  textContent: string;
  codeContent: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  tags: ITagQuestionDetail[];
  user: IUserQuestionDetail;
  tag?: ITag;
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
  id: number;
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
  questionId: string | number;
}

export interface IVoteDetail {
  username: string;
  status: string;
}

export interface ITag {
  id?: number;
  name: string;
}