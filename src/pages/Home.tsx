import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ScrollView, Text, Button } from 'react-native';
import { PageContainer } from '../styles';
import {
  GetPostsDocument,
  GetPostsQuery,
  Post as IPost,
} from '../generated/graphql';
import Post from '../components/Post';

const POSTS_PER_PAGE = 2;

const Home = () => {
  const { loading, error, data, fetchMore } = useQuery<GetPostsQuery>(
    GetPostsDocument,
    {
      variables: { first: POSTS_PER_PAGE },
    },
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;

  const loadMore = () => {
    if (data?.getPosts?.edges) {
      const { edges } = data.getPosts;
      const lastCursor = edges[edges?.length - 1]?.cursor;
      console.log({ lastCursor });
      fetchMore({
        variables: {
          first: POSTS_PER_PAGE,
          after: lastCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult?.getPosts?.edges || [];
          const pageInfo = fetchMoreResult?.getPosts?.pageInfo;
          const oldEdges = previousResult?.getPosts?.edges || [];
          return Object.assign({}, previousResult, {
            getPosts: {
              __typename: previousResult?.getPosts?.__typename,
              edges: [...oldEdges, ...newEdges],
              pageInfo,
            },
          });
        },
      });
    }
  };

  return (
    <PageContainer>
      <ScrollView>
        {data?.getPosts?.edges?.map((post) => (
          <Post post={post?.node} key={post?.cursor} />
        ))}
        <Button onPress={loadMore} title="Load More" />
      </ScrollView>
    </PageContainer>
  );
};

export default Home;
