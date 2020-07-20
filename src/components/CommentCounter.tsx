import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Maybe } from '../generated/graphql';
import { CommentText } from '../styles';

const CommentCounter = ({
  postID,
  comments,
}: {
  postID: string;
  comments?: Maybe<string>[];
}) => {
  const totalComments = comments?.length;
  const navigation = useNavigation();
  if (!totalComments) {
    return <></>;
  }

  return (
    <CommentText onPress={() => navigation.navigate('Comments', { postID })}>
      {totalComments} Comentarios...
    </CommentText>
  );
};

export default CommentCounter;
