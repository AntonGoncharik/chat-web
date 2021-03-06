/* eslint-disable no-undef */
import { apiGet, apiPost, apiPatch } from '../api';

export default {
  async signin(data) {
    try {
      const result = await apiPost('/signin', data);
      return { data: result.data, status: result.status };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getUsers(page = 1, records = 20) {
    try {
      const result = await apiGet('/users', { params: { page, records } });
      return { data: result.data, status: result.status };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getUserByToken() {
    try {
      const result = await apiGet('/users', { params: { token: 1 } });
      return { data: result.data, status: result.status };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async getUserById(id) {
    try {
      const result = await apiGet('/users', { params: { id } });
      return { data: result.data, status: result.status };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async createUser(data, config = {}) {
    try {
      const result = await apiPost('/users', data, {}, config);
      return { data: result, status: result.status };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async updateUser(data, config) {
    try {
      const result = await apiPatch('/users', data, config);
      return { data: result.data, status: result.status };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  async signout(data) {
    try {
      if (data) {
        await apiPost('/signout', data);
      }

      globalThis.localStorage.removeItem('token');
      globalThis.localStorage.removeItem('refreshToken');

      globalThis.history.replaceState({}, '/', '/');
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
  goToDashboard() {
    globalThis.history.replaceState({}, '/dashboard', '/dashboard');
  },
  goToSignin() {
    globalThis.history.replaceState({}, '/signin', '/signin');
  },
  setToken(token) {
    globalThis.localStorage.setItem('token', token);
  },
  getToken() {
    return globalThis.localStorage.getItem('token');
  },
  setRefreshToken(token) {
    globalThis.localStorage.setItem('refreshToken', token);
  },
  getRefreshToken() {
    return globalThis.localStorage.getItem('refreshToken');
  },
};
