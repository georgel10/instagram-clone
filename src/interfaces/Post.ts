import { Post } from '../generated/graphql';

export interface IPosts {
  [cursor: string]: Post;
}
