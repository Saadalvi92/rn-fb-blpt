import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../Components/AppButton';
import colors from '../../config/colors';
import Topbar from './Topbar';
import {Navigation} from 'react-native-navigation';
function AddVideos(props) {
  const [fileUri, setfileUri] = useState();
  const options2 = {
    title: 'Select video',
    mediaType: 'video',
    path: 'video',
    quality: 1,
  };

  return (
    <View style={{flex: 1, height: '100%'}}>
      <Topbar
        title1="<- Add Photos"
        title2="Pick Category ->"
        onPress1={() => {
          Navigation.pop(props.componentId);
        }}
        onPress2={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'PickCategories',
              options: {
                topBar: {
                  //     visible: false,
                  animate: true,
                  title: {
                    text: 'Pick Categories',
                    fontSize: 25,
                    alignment: 'center',
                    color: colors.white,
                  },
                  backButton: {color: colors.white},
                  background: {color: colors.green},
                },
              },
            },
          });
        }}
      />
      <View
        style={{flex: 2 / 3, alignItems: 'center', justifyContent: 'center'}}>
        {fileUri ? (
          <Video
            source={{uri: fileUri}}
            ref={ref => {
              player = ref;
            }} // Store reference
            // onBuffer={this.onBuffer} // Callback when remote video is buffering
            // onError={this.videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
          />
        ) : (
          <Image source={require('../../assets/VV.png')}></Image>
        )}
      </View>
      <View style={{alignItems: 'center', backgroundColor: colors.lightGrey}}>
        <TouchableOpacity
          onPress={() => {
            launchImageLibrary(options2, response => {
              if (response.didCancel) {
                console.log('user cancelled image picker');
              } else if (response.error) {
                console.log('image picker error', response.error);
              } else if (response.customButton) {
                console.log(
                  'user tapped custom button ',
                  response.customButton,
                );
              } else {
                setfileUri(response.assets[0].uri);
              }
            });
          }}>
          <Icon name="collections" size={25} />
        </TouchableOpacity>
      </View>
      <AppButton title="save" color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: '18%',
    bottom: 0,
    right: 0,
  },
});
export default AddVideos;
