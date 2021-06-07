import React from 'react';
import {Text, View, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import {SigninStoreContext, useSigninStore} from '../../../Store/MobxSignin';
import auth from '@react-native-firebase/auth';
const index = observer(props => {
  const {User, SignoutMobx} = useSigninStore();

  return (
    <View style={{justifyContent: 'center', height: '100%'}}>
      <Text>
        {User[0].email ? User[0].email : 'User Name:' + User[0].userID}
      </Text>
      <Button
        title="Signout"
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }}
      />
    </View>
  );
});

export default index;
