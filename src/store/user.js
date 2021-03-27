/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';

import { UserService } from '../api';
class UserStore {
  data = {
    id: '',
    email: '',
    name: '',
    auth: false,
    loading: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async signin(email, password) {
    try {
      this.data.loading = true;

      const result = await UserService.signin({ email, password });

      this.data.id = result.data.user._id;
      this.data.email = result.data.user.email;
      this.data.name = result.data.user.name;
      this.data.auth = true;

      UserService.setToken(result.data.token);
      UserService.setRefreshToken(result.data.refreshToken);

      UserService.goToDashboard();
    } catch (error) {
      throw new Error(error);
    } finally {
      this.data.loading = false;
    }
  }

  async autosignin() {
    try {
      this.data.loading = true;

      const token = UserService.getToken();

      if (!token) {
        this.data.loading = false;
        return;
      }

      const result = await UserService.getUserByToken();

      this.data.id = result.data._id;
      this.data.email = result.data.email;
      this.data.name = result.data.name;
      this.data.auth = true;

      UserService.goToDashboard();
    } catch (error) {
      throw new Error(error);
    } finally {
      this.data.loading = false;
    }
  }

  async signup(email, password) {
    try {
      await UserService.createUser({ email, password });
      await this.signin(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async signout() {
    try {
      await UserService.signout({ id: this.data.id });

      this.data.auth = false;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new UserStore();
