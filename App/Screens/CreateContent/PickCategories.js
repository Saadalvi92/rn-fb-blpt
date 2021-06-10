import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppText from '../../Components/AppText';
import AppButton from '../../Components/AppButton';
function PickCategories(props) {
  const dataTags = [
    'Food',
    'Theater',
    'Apparel',
    'Trails',
    'SightSeeing',
    'Parks',
    'Autos&Bikes',
  ];
  const [data, setData] = useState(dataTags);
  const [search, setSearch] = useState();
  const [masterDataSource, setMasterDataSource] = useState(dataTags);
  const [selected, SetSelected] = useState();
  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(item => {
        const itemData = item ? item.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(masterDataSource);
      setSearch(text);
    }
  };
  return (
    <View style={{flex: 1, height: '100%', justifyContent: 'center'}}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      {!search ? (
        <View style={{flex: 1, marginLeft: '10%', marginTop: '10%'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Popular</Text>
          <FlatList
            data={masterDataSource}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    SetSelected(item);
                  }}>
                  <AppText>{item}</AppText>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ) : (
        <View style={{flex: 1, marginLeft: '10%', marginTop: '10%'}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    SetSelected(item);
                  }}>
                  <AppText>{item}</AppText>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
      <View
        style={{
          alignItems: 'center',
          marginBottom: '10%',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>You Selected</Text>
        <AppText>{selected}</AppText>
      </View>

      <AppButton title="Save" color="green" />
    </View>
  );
}

export default PickCategories;
const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000',
    elevation: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
});
