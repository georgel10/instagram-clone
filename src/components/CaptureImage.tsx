import React, { useRef, useState } from 'react';
import { Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker, { ImagePickerOptions } from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';
import { Box } from '../styles';

const options: ImagePickerOptions = {
  quality: 0.7,
  title: 'Subir imagen o video desde...',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  takePhotoButtonTitle: 'Tomar Foto',
  chooseFromLibraryButtonTitle: 'Desde Galería',
  cancelButtonTitle: 'CANCELAR',
};

const CaptureImage = () => {
  const camera = useRef<RNCamera>(null);
  const [source, setSource] = useState({ uri: '' });

  /* <RNCamera ref={camera}>
      </RNCamera> */
  const takePicture = async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  const take = async () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setSource({ uri: response.uri });
        // setSource({ uri: 'data:image/jpeg;base64,' + response.data });
      }
    });
  };

  return (
    <Box>
      <TouchableHighlight onPress={() => take()}>
        {source.uri ? (
          <Image
            source={source}
            style={{ width: 350, height: 350, borderRadius: 4 }}
          />
        ) : (
          <Icon
            name="image"
            size={64}
            color="gray"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          />
        )}
      </TouchableHighlight>
    </Box>
  );
};

export default CaptureImage;
