import React from 'react';
import { HeaderPost } from '../styles';
import HeaderAuthor from './HeaderAuthor';
import LikeButton from './LikeButton';
import ImagePost from './ImagePost';
import CommentCounter from './CommentCounter';
import CommentInput from './CommentInput';
import BodyPost from './BodyPost';

const Post = ({ post }: { post: any }) => {
  if (!post) {
    return <></>;
  }
  const author = post.authorInfo;
  const comments = post.comments || [];
  return (
    <>
      <HeaderPost>
        <HeaderAuthor author={author} />
        <LikeButton />
      </HeaderPost>
      <ImagePost />
      <BodyPost content={post.content} author={author} />
      <CommentCounter postID={post._id} comments={comments} />
      <CommentInput postID={post._id} />
    </>
  );
};

export default Post;
