import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Skeleton = () => (
  <SkeletonPlaceholder>
    <SkeletonPlaceholder.Item
      flexDirection="row"
      alignItems="center"
      marginTop={10}>
      <SkeletonPlaceholder.Item
        marginLeft={10}
        width={50}
        height={50}
        borderRadius={50}
      />
      <SkeletonPlaceholder.Item marginLeft={20}>
        <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
        <SkeletonPlaceholder.Item
          marginTop={6}
          width={80}
          height={20}
          borderRadius={4}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder.Item>
    <SkeletonPlaceholder.Item marginVertical={15} height={200} />
    <SkeletonPlaceholder.Item
      marginHorizontal={20}
      marginBottom={15}
      height={20}
      borderRadius={4}
    />
  </SkeletonPlaceholder>
);

const HomeSkeleton = () => (
  <>
    <Skeleton />
    <Skeleton />
  </>
);

export default HomeSkeleton;
