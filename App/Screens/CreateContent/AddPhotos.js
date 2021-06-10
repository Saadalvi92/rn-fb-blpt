import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../Components/AppButton';
import colors from '../../config/colors';
import Topbar from './Topbar';
import {Navigation} from 'react-native-navigation';
function AddPhotos(props) {
  const images = [
    {id: 1, uri: require('../../assets/AddPic.png')},
    {id: 2, uri: require('../../assets/AddPic.png')},
    {id: 3, uri: require('../../assets/AddPic.png')},
    {id: 4, uri: require('../../assets/AddPic.png')},
    {id: 5, uri: require('../../assets/AddPic.png')},
    {id: 6, uri: require('../../assets/AddPic.png')},
    {id: 7, uri: require('../../assets/AddPic.png')},
    {id: 8, uri: require('../../assets/AddPic.png')},
    {id: 9, uri: require('../../assets/AddPic.png')},
  ];
  const [fileUri, setfileUri] = useState([]);
  let options = {
    storageOptions: {
      skipBackup: false,
      path: 'images',
    },
  };

  return (
    <View style={{flex: 1, height: '100%'}}>
      <Topbar
        title1="<- Set Location"
        title2="Add Videos"
        onPress1={() => {
          Navigation.pop(props.componentId);
        }}
        onPress2={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'AddVideos',
              options: {
                topBar: {
                  //     visible: false,
                  animate: true,
                  title: {
                    text: 'Add Videos',
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
      <View>
        <FlatList
          data={images}
          numColumns={3}
          renderItem={({item}) => (
            <View
              style={{marginLeft: '5%', marginTop: '3%', marginBottom: '5%'}}>
              <Image
                source={
                  fileUri[item.id - 1] ? {uri: fileUri[item.id - 1]} : item.uri
                }
                style={{height: 104, width: 104}}></Image>
            </View>
            //
            //fileuri[item.id]?fileuri[item.id]:item.uri
          )}
        />
      </View>
      <View style={{alignItems: 'center', backgroundColor: colors.lightGrey}}>
        <TouchableOpacity
          onPress={() => {
            launchImageLibrary(options, response => {
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
                // const source = {uri: response.assets[0].uri};

                setfileUri([...fileUri, response.assets[0].uri]);
                console.log(fileUri);
              }
            });
          }}>
          <Icon name="collections" size={25} />
        </TouchableOpacity>
      </View>
      <AppButton title="Save" color="green" />
    </View>
  );
}

export default AddPhotos;
