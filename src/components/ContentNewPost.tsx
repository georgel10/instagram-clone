import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Box, CircleButton, InputFormComment } from '../styles';

const ContentNewPost = () => {
  const [comment, setComment] = useState('');

  return (
    <Box>
      <InputFormComment
        multiline
        numberOfLines={4}
        placeholder="Escribe el pie de foto o video..."
        onChangeText={(text) => setComment(text)}
        value={comment}
        style={{ minHeight: 80 }}
      />
      <CircleButton style={{ width: 70, height: 70 }}>
        <View>
          {false ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Icon name="share-outline" size={36} color="white" />
          )}
        </View>
      </CircleButton>
    </Box>
  );
};

export default ContentNewPost;
