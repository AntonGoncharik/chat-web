/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';

import { UserService } from '../api';
class UserStore {
  data = {
    id: '',
    email: '',
    name: '',
    createdAt: '',
    description: '',
    avatar: '',
    auth: false,
    loading: false,
    statistics: {
      allUsers: 0,
      onlineUsers: 0,
    },
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
      this.data.createdAt = result.data.user.createdAt;
      this.data.description = result.data.user.description;
      this.data.avatar = result.data.user.avatar;
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
      this.data.createdAt = result.data.createdAt;
      this.data.description = result.data.description;
      this.data.avatar = result.data.avatar;
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
      this.data.loading = true;

      await UserService.signout({ id: this.data.id });

      this.data.auth = false;

      UserService.goToSignin();
    } catch (error) {
      throw new Error(error);
    } finally {
      this.data.loading = false;
    }
  }

  async save(data) {
    try {
      this.data.loading = true;

      if (data.name) {
        const result = await UserService.updateUser(
          { id: this.data.id, data },
          {},
        );

        this.data.name = result.data.name;
        this.data.description = result.data.description;
      }

      if (data.formData) {
        const resultAvatar = await UserService.updateUser(data.formData, {
          contentType: 'multipart/form-data',
        });

        this.data.avatar = resultAvatar.data.avatar;
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      this.data.loading = false;
    }
  }

  setAllUsers(allUsers) {
    this.data.statistics.allUsers = allUsers;
  }
  setOnlineUsers(onlineUsers) {
    this.data.statistics.onlineUsers = onlineUsers;
  }
}

export default new UserStore();
