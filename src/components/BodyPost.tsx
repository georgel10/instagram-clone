import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AuthorPostName } from '../styles';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginTop: 10,
  },
});

const BodyPost = ({ author, content }: { author: any; content: string }) => {
  return (
    <View style={style.container}>
      <Text>
        <AuthorPostName>{author.name} </AuthorPostName>
        {content}
      </Text>
    </View>
  );
};

export default BodyPost;
