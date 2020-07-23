import React from 'react';
import { PageContainer } from '../styles';
import CaptureImage from '../components/CaptureImage';
import ContentNewPost from '../components/ContentNewPost';

const Create = () => {
  return (
    <PageContainer>
      <CaptureImage />
      <ContentNewPost />
    </PageContainer>
  );
};

export default Create;
