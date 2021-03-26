/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';

import { UserService } from '../api';
class UserStore {
  data = {
    id: '',
    email: '',
    name: '',
    auth: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async signin(email, password) {
    try {
      const result = await UserService.login({ email, password });

      this.data.id = result.data.user._id;
      this.data.email = result.data.user.email;
      this.data.name = result.data.user.name;
      this.data.auth = true;

      UserService.setToken(result.data.token);
      UserService.setRefreshToken(result.data.refreshToken);
    } catch (error) {
      throw new Error(error);
    }
  }

  async autoSignin() {
    try {
      const token = UserService.getToken();

      if (!token) {
        return;
      }

      const result = await UserService.getUserByToken();

      this.data.id = result.data._id;
      this.data.email = result.data.email;
      this.data.name = result.data.name;
      this.data.auth = true;

      // UserService.goToDashboard();
    } catch (error) {
      throw new Error(error);
    }
  }

  async signup(email, password) {
    const result = await UserService.createUser({ email, password });
    // eslint-disable-next-line no-debugger
    debugger;
    // this.data.email = 'test';
    // this.data.auth = true;
  }

  signout() {
    this.data.auth = false;

    UserService.logout();
  }
}

export default new UserStore();
