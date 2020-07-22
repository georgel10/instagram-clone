import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Skeleton = () => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item
      flexDirection="row"
      alignItems="center"
      marginTop={10}
      marginBottom={30}>
      <SkeletonPlaceholder.Item
        marginLeft={5}
        width={30}
        height={30}
        borderRadius={50}
      />
      <SkeletonPlaceholder.Item marginLeft={10}>
        <SkeletonPlaceholder.Item width={260} height={20} borderRadius={4} />
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={80}
          height={10}
          borderRadius={4}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
  </SkeletonPlaceholder>
);

const CommentSkeleton = () => (
  <>
    {[...Array(6)].map((_, i) => (
      <Skeleton key={i} />
    ))}
  </>
);

export default CommentSkeleton;
