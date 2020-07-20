import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useLazyQuery } from '@apollo/client';
import { GetCommentsQuery, GetCommentsDocument } from '../generated/graphql';
import BodyPost from '../components/BodyPost';
import CommentInput from '../components/CommentInput';
import { BoxBottom } from '../styles';

const POSTS_PER_PAGE = 20;

const Comments = ({ navigation, route }: { navigation: any; route: any }) => {
  const { postID } = route.params;
  const [getData, { loading, error, data, fetchMore }] = useLazyQuery<
    GetCommentsQuery
  >(GetCommentsDocument);

  useEffect(() => {
    getData({
      variables: { postID, first: POSTS_PER_PAGE },
    });
  }, [postID]);

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
    <>
      {renderComments()}
      <BoxBottom>
        <CommentInput postID={postID} />
      </BoxBottom>
    </>
  );
};

export default Comments;
