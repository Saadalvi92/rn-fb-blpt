import React from 'react';
import auth from '@react-native-firebase/auth';
function signin(Values) {
  auth()
    .signInWithEmailAndPassword(Values.email, Values.password)
    .then(res => {
      return res;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
      alert('Please Check you login Credentials');
    });
}
export {signin};
