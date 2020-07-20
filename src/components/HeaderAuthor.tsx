import React from 'react';
import { View } from 'react-native';
import { Avatar, AuthorPostInfo, AuthorPostName, SubTitle } from '../styles';

const HeaderAuthor = ({ author }: { author: any }) => {
  if (!author) {
    return <></>;
  }
  return (
    <View>
      <AuthorPostInfo>
        <Avatar
          source={{
            uri:
              'data:image/jpeg;base64,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',
          }}
        />
        <View>
          <AuthorPostName>{author.name}</AuthorPostName>
          <SubTitle>30 min</SubTitle>
        </View>
      </AuthorPostInfo>
    </View>
  );
};

export default HeaderAuthor;