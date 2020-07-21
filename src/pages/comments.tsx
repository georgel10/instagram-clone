import React, { useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import { GetCommentsQuery, GetCommentsDocument } from '../generated/graphql';
import BodyPost from '../components/BodyPost';
import CommentInput from '../components/CommentInput';
import { PageContainer, BoxBottom } from '../styles';

const POSTS_PER_PAGE = 40;

const Comments = ({ navigation, route }: { navigation: any; route: any }) => {
  const { postID } = route.params;
  const [getData, { loading, error, data, fetchMore }] = useLazyQuery<
    GetCommentsQuery
  >(GetCommentsDocument);
  let scrollView: ScrollView | null;

  const scrollBottom = () => scrollView?.scrollToEnd({ animated: true });

  useEffect(() => {
    getData({
      variables: { postID, first: POSTS_PER_PAGE },
    });
  }, [postID]);

  useEffect(() => {
    console.log(data);
    setTimeout(() => scrollBottom(), 100);
  }, [data]);

  console.log(data);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;

  const comments = data?.getComments?.edges;
  if (!comments || !comments?.length) {
    return <Text>No hay comentarios aún</Text>;
  }

  const renderComments = () => {
    return comments.map((comment) => {
      if (comment?.node) {
        return (
          <BodyPost
            key={comment.cursor}
            content={comment.node.content}
            author={comment.node.author}
          />
        );
      }
    });
  };

  return (
    <PageContainer>
      <ScrollView
        style={{ maxHeight: '90%', width: '100%' }}
        ref={(ref) => {
          scrollView = ref;
        }}
        onContentSizeChange={() => scrollBottom()}>
        {renderComments()}
      </ScrollView>
      <BoxBottom>
        <CommentInput postID={postID} />
      </BoxBottom>
    </PageContainer>
  );
};

export default Comments;
