import { Comment } from './comment.type';
import { Like } from './like.type';

export enum PostType {
  Video = 'Video',
  Text = 'Text',
  Quotation = 'Quotation',
  Photo = 'Photo',
  Link = 'Link'
}

export type Post = {
  id: string;
  type: PostType;
  userId: string;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
  isRepost?: boolean;
  tags?: string[];
  comments?: Comment[];
  likes?: Like[];
}

export type VideoPost = Post & {
  name: string;
  urlVideo: string;
}

export type TextPost = Post & {
  name: string;
  title: string;
  text: string;
}

export type QuotationPost = {
  text: string;
  author: string;
}

export type PhotoPost = {
  photo: string;
}

export type LinkPost = {
  url: string;
  description?: string;
}
