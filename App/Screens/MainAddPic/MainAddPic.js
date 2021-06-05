import React, {Component} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Navigation} from 'react-native-navigation';
import AppButton from '../../Components/AppButton';
import styles from './Style';
export default class MainAddPic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
    };
  }

  launchImageLibrarya = () => {
    let options = {
      storageOptions: {
        skipBackup: false,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('image picker error', response.error);
      } else if (response.customButton) {
        console.log('user tapped custom button ', response.customButton);
      } else {
        const source = {uri: response.uri};
        this.setState({fileUri: response.uri});
      }
    });
  };
  launchCameraa = () => {
    let options = {
      storageOptions: {
        skipBackup: false,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('image picker error', response.error);
      } else if (response.customButton) {
        console.log('user tapped custom button ', response.customButton);
      } else {
        const source = {uri: response.uri};
        this.setState({fileUri: response.uri});
      }
    });
  };
  renderFileUri() {
    if (this.state.fileUri) {
      return <Image style={styles.img} source={{uri: this.state.fileUri}} />;
    } else {
      return (
        <ScrollView>
          <View style={styles.background}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 35,
                    fontWeight: 'bold',
                    alignItems: 'flex-start',
                    marginLeft: '20%',
                    marginTop: '10%',
                  }}>
                  Add a
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 35,
                    fontWeight: 'bold',
                    alignItems: 'flex-start',
                    marginLeft: '20%',
                  }}>
                  Picture
                </Text>
              </View>
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../assets/Applogo.png')}
                  style={styles.logo}
                />
              </View>
            </View>
            <Image
              source={require('../../assets/Vector.png')}
              style={{
                marginTop: 100,
                justifyContent: 'center',
                alignContent: 'center',
              }}
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={this.launchImageLibrarya}>
                <Image source={require('../../assets/Vector(1).png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.launchCameraa}
                style={{marginLeft: 50}}>
                <Image source={require('../../assets/Vector(2).png')} />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                color: 'blue',
                fontWeight: '600',
                marginTop: 20,
                fontSize: 20,
              }}>
              By Sigini up you agree to our
            </Text>
            <Text style={{color: 'blue', fontWeight: '700', fontSize: 20}}>
              Terms {'& '}Conditions and
            </Text>
            <Text style={{color: 'blue', fontWeight: '700', fontSize: 20}}>
              privacy Policies
            </Text>
            <AppButton
              title="Finish"
              color="green"
              onPress={() => {
                Navigation.popToRoot(this.props.componentId);
              }}
            />
            <Text
              style={{
                color: 'blue',
                fontWeight: '600',
                marginTop: 20,
                fontSize: 20,
              }}>
              Issues?Try another way to create account
            </Text>
          </View>
        </ScrollView>
      );
    }
  }

  render() {
    return <View style={styles.container}>{this.renderFileUri()}</View>;
  }
}
