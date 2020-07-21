import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
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

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      content: // value for 'content'
 *      userID: // value for 'userID'
 *      postID: // value for 'postID'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, baseOptions);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
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

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      postID: // value for 'postID'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, baseOptions);
      }
export function useGetCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, baseOptions);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
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

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
      }
export function useGetPostsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, baseOptions);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = ApolloReactCommon.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  user(id: $id) {
    _id
    name
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;