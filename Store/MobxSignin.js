import React from 'react';
import {makeObservable, action, observable} from 'mobx';

class MobxSignin {
  User = [];

  constructor() {
    makeObservable(this, {
      User: observable,
      SigninMobx: action.bound,
      SignoutMobx: action.bound,
    });
  }

  SigninMobx(Value) {
    this.User.pop();
    this.User.push(Value);
  }

  SignoutMobx(Value) {
    this.User.pop();
  }
}

const Store = new MobxSignin();
export const SigninStoreContext = React.createContext(Store);
export const useSigninStore = () => React.useContext(SigninStoreContext);
