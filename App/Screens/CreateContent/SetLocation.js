import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import AppButton from '../../Components/AppButton';
import Topbar from './Topbar';
import {Navigation} from 'react-native-navigation';
import colors from '../../config/colors';
const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '100%',
    flex: 2 / 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  txt: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default setLoction = props => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  return (
    <View style={{flex: 1, height: '100%'}}>
      <Topbar
        title1="<- AddText"
        title2="Add Photos ->"
        onPress1={() => {
          Navigation.pop(props.componentId);
        }}
        onPress2={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'AddPhotos',
              options: {
                topBar: {
                  animate: true,
                  title: {
                    text: 'Add Photos',
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
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
            onRegionChange={region => {
              setRegion(region);
            }}></MapView>
        </View>
        <View style={{flex: 1 / 3}}>
          <Text style={styles.txt}>latitude:{region.latitude}</Text>
          <Text style={styles.txt}>latitudeDelta:{region.latitudeDelta}</Text>
          <Text style={styles.txt}>longitude:{region.longitude}</Text>
          <Text style={styles.txt}>longitudeDelta:{region.longitudeDelta}</Text>
        </View>
        <AppButton title="Save" color="green" />
      </View>
    </View>
  );
};
