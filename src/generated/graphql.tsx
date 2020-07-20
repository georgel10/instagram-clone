import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['ID'];
  author?: Maybe<User>;
  content: Scalars['String'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Comments = {
  __typename?: 'Comments';
  pageInfo: PageInfo;
  edges?: Maybe<Array<Maybe<CommentEdge>>>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String'];
  node?: Maybe<Comment>;
};

export type Query = {
  __typename?: 'Query';
  getComments?: Maybe<Comments>;
  findComment?: Maybe<Comment>;
  getPosts?: Maybe<Posts>;
  findPost?: Maybe<Post>;
  getLikes?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  hello: Scalars['String'];
};


export type QueryGetCommentsArgs = {
  postID: Scalars['ID'];
  first?: Maybe<Scalars['Float']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryFindCommentArgs = {
  commentID: Scalars['ID'];
};


export type QueryGetPostsArgs = {
  first?: Maybe<Scalars['Float']>;
  after?: Maybe<Scalars['String']>;
};


export type QueryFindPostArgs = {
  postID: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<Scalars['Boolean']>;
  addPost?: Maybe<Post>;
  addLike?: Maybe<Scalars['Boolean']>;
  register?: Maybe<User>;
  login?: Maybe<User>;
};


export type MutationAddCommentArgs = {
  postID?: Maybe<Scalars['ID']>;
  commentParent?: Maybe<Scalars['ID']>;
  content: Scalars['String'];
  userID: Scalars['ID'];
};


export type MutationAddPostArgs = {
  content: Scalars['String'];
  userID: Scalars['ID'];
};


export type MutationAddLikeArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Edge = {
  __typename?: 'Edge';
  cursor: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['ID'];
  content: Scalars['String'];
  media?: Maybe<Array<Maybe<Media>>>;
  author: Scalars['String'];
  authorInfo?: Maybe<User>;
  comments?: Maybe<Array<Maybe<Scalars['String']>>>;
  likes?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalLikes?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Media = {
  __typename?: 'Media';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
};

export type Posts = {
  __typename?: 'Posts';
  pageInfo: PageInfo;
  edges?: Maybe<Array<Maybe<PostEdge>>>;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  cursor: Scalars['String'];
  node?: Maybe<Post>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type AddCommentMutationVariables = Exact<{
  content: Scalars['String'];
  userID: Scalars['ID'];
  postID: Scalars['ID'];
}>;


export type AddCommentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addComment'>
);

export type GetCommentsQueryVariables = Exact<{
  postID: Scalars['ID'];
  first?: Maybe<Scalars['Float']>;
  after?: Maybe<Scalars['String']>;
}>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { getComments?: Maybe<(
    { __typename?: 'Comments' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ), edges?: Maybe<Array<Maybe<(
      { __typename?: 'CommentEdge' }
      & Pick<CommentEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'Comment' }
        & Pick<Comment, '_id' | 'content'>
        & { author?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, '_id' | 'name' | 'email'>
        )> }
      )> }
    )>>> }
  )> }
);

export type GetPostsQueryVariables = Exact<{
  first?: Maybe<Scalars['Float']>;
  after?: Maybe<Scalars['String']>;
}>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { getPosts?: Maybe<(
    { __typename?: 'Posts' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ), edges?: Maybe<Array<Maybe<(
      { __typename?: 'PostEdge' }
      & Pick<PostEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, '_id' | 'content' | 'comments' | 'likes'>
        & { authorInfo?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, '_id' | 'name' | 'username'>
        )> }
      )> }
    )>>> }
  )> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name'>
  )> }
);


export const AddCommentDocument = gql`
    mutation AddComment($content: String!, $userID: ID!, $postID: ID!) {
  addComment(content: $content, userID: $userID, postID: $postID)
}
    `;
export type AddCommentMutationFn = ApolloReactCommon.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;
export type AddCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddCommentMutation, AddCommentMutationVariables>, 'mutation'>;

    export const AddCommentComponent = (props: AddCommentComponentProps) => (
      <ApolloReactComponents.Mutation<AddCommentMutation, AddCommentMutationVariables> mutation={AddCommentDocument} {...props} />
    );
    
export type AddCommentProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddCommentMutation, AddCommentMutationVariables>
    } & TChildProps;
export function withAddComment<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddCommentMutation,
  AddCommentMutationVariables,
  AddCommentProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddCommentMutation, AddCommentMutationVariables, AddCommentProps<TChildProps, TDataName>>(AddCommentDocument, {
      alias: 'addComment',
      ...operationOptions
    });
};
export type AddCommentMutationResult = ApolloReactCommon.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const GetCommentsDocument = gql`
    query GetComments($postID: ID!, $first: Float, $after: String) {
  getComments(postID: $postID, first: $first, after: $after) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        _id
        author {
          _id
          name
          email
        }
        content
      }
    }
  }
}
    `;
export type GetCommentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCommentsQuery, GetCommentsQueryVariables>, 'query'> & ({ variables: GetCommentsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCommentsComponent = (props: GetCommentsComponentProps) => (
      <ApolloReactComponents.Query<GetCommentsQuery, GetCommentsQueryVariables> query={GetCommentsDocument} {...props} />
    );
    
export type GetCommentsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCommentsQuery, GetCommentsQueryVariables>
    } & TChildProps;
export function withGetComments<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommentsQuery,
  GetCommentsQueryVariables,
  GetCommentsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommentsQuery, GetCommentsQueryVariables, GetCommentsProps<TChildProps, TDataName>>(GetCommentsDocument, {
      alias: 'getComments',
      ...operationOptions
    });
};
export type GetCommentsQueryResult = ApolloReactCommon.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts($first: Float, $after: String) {
  getPosts(first: $first, after: $after) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        _id
        content
        comments
        likes
        authorInfo {
          _id
          name
          username
        }
      }
    }
  }
}
    `;
export type GetPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostsQuery, GetPostsQueryVariables>, 'query'>;

    export const GetPostsComponent = (props: GetPostsComponentProps) => (
      <ApolloReactComponents.Query<GetPostsQuery, GetPostsQueryVariables> query={GetPostsDocument} {...props} />
    );
    
export type GetPostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPostsQuery, GetPostsQueryVariables>
    } & TChildProps;
export function withGetPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPostsQuery,
  GetPostsQueryVariables,
  GetPostsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPostsQuery, GetPostsQueryVariables, GetPostsProps<TChildProps, TDataName>>(GetPostsDocument, {
      alias: 'getPosts',
      ...operationOptions
    });
};
export type GetPostsQueryResult = ApolloReactCommon.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  user(id: $id) {
    _id
    name
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    
export type GetUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserQuery, GetUserQueryVariables>
    } & TChildProps;
export function withGetUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps, TDataName>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    