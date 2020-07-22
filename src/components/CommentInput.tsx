import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements';
import { useMutation } from '@apollo/client';
import { Row, CircleButton, InputFormComment } from '../styles';
import {
  AddCommentDocument,
  AddCommentMutation,
  GetPostsDocument,
  GetCommentsDocument,
} from '../generated/graphql';

const CommentInput = ({ postID }: { postID: string }) => {
  const [comment, setComment] = useState('');
  const [addComment, { loading }] = useMutation<AddCommentMutation>(
    AddCommentDocument,
  );

  const submitComment = async () => {
    console.log({ comment, postID });
    const result = await addComment({
      variables: {
        content: comment,
        userID: '5f111f3c80c9c21c9c6f6244',
        postID,
      },
      refetchQueries: [
        { query: GetPostsDocument },
        { query: GetCommentsDocument, variables: { postID, first: 40 } },
      ],
    });
    console.log(result);
    setComment('');
  };

  return (
    <Row>
      <InputFormComment
        multiline
        placeholder="Di algo"
        onChangeText={(text) => setComment(text)}
        value={comment}
        editable={!loading}
      />
      <CircleButton onPress={submitComment}>
        <View>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Icon name="send" type="ionicon" size={16} color="white" />
          )}
        </View>
      </CircleButton>
    </Row>
  );
};

export default CommentInput;
