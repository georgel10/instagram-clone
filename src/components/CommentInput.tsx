import React, { useState } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { useMutation } from '@apollo/client';
import { Row, CircleButton, InputFormComment } from '../styles';
import { AddCommentDocument, AddCommentMutation } from '../generated/graphql';

const CommentInput = ({ postID }: { postID: string }) => {
  const [comment, setComment] = useState('');
  const [addComment] = useMutation<AddCommentMutation>(AddCommentDocument);

  const submitComment = async () => {
    console.log({ comment, postID });
    const result = await addComment({
      variables: {
        content: comment,
        userID: '5f07b7c8ebeabc29a95eccc3',
        postID,
      },
    });
    console.log(result);
  };

  return (
    <Row>
      <InputFormComment
        multiline
        placeholder="Di algo"
        onChangeText={(text) => setComment(text)}
        value={comment}
      />
      <CircleButton onPress={submitComment}>
        <View>
          <Icon name="send" type="ionicon" size={16} color="white" />
        </View>
      </CircleButton>
    </Row>
  );
};

export default CommentInput;
