import { makeAutoObservable } from 'mobx';

class UserStore {
  data = {
    email: '',
    auth: true,
  };

  constructor() {
    makeAutoObservable(this);
  }

  signin() {
    this.data.email = 'test';
    this.data.auth = true;
  }

  signout() {
    this.data.email = '';
    this.data.auth = false;
  }
}

export default new UserStore();