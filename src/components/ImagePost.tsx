import React, { useEffect, useState } from 'react';
import { Image, View, LayoutChangeEvent, StyleSheet } from 'react-native';

const uri =
  'https://images.unsplash.com/photo-1485906441524-ed91f8315b4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

const ImagePost = ({ source }: { source: string }) => {
  const [ratio, setRatio] = useState(1);
  const [widthScreen, setWidthScreen] = useState(0);
  const [height, setHeight] = useState(0);
  const [src] = useState(source || uri);

  useEffect(() => {
    // calculate image ratio before load
    if (widthScreen) {
      console.log(src);
      Image.getSize(
        src,
        (w, h) => {
          const calc = w / h;
          setRatio(calc);
          setHeight(widthScreen / calc);
        },
        (error) => console.log(error),
      );
    }
  }, [widthScreen]);

  const calcSize = (event: LayoutChangeEvent) => {
    setWidthScreen(event.nativeEvent.layout.width);
  };

  const style = StyleSheet.create({
    image: {
      width: widthScreen || '100%',
      height: height || 'auto',
      aspectRatio: ratio,
      resizeMode: 'contain',
    },
  });

  return (
    <View onLayout={calcSize}>
      <Image
        style={style.image}
        source={{
          uri: src,
        }}
      />
    </View>
  );
};

export default ImagePost;
