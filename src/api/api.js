/* eslint-disable no-undef */
import axios from 'axios';

import { UserService } from '.';

import { BASE_URL } from '../config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use((config) => {
  const token = globalThis.localStorage.getItem('token');
  config.headers.Authorization = `jwt ${token}`;

  if (
    config.url === '/login' ||
    (config.url === '/users' && config.method === 'post')
  ) {
    delete config.headers.Authorization;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.code === 401) {
      UserService.logout();
    }
    return Promise.reject(error);
  },
);

export const apiPost = (path, body, params = {}, configOutside) => {
  axiosInstance.interceptors.request.use((config) => {
    if (configOutside && configOutside.contentType) {
      config.headers['Content-Type'] = configOutside.contentType;
    }
    return config;
  });

  if (configOutside && configOutside.contentType) {
    return axiosInstance.post(path, body, { params });
  }
  return axiosInstance.post(path, JSON.stringify(body), { params });
};

export const apiGet = (path, params, configOutside) => {
  axiosInstance.interceptors.request.use((config) => {
    if (configOutside && configOutside.token) {
      config.headers.Authorization = `jwt ${configOutside.token}`;
    }
    return config;
  });

  return axiosInstance.get(path, params);
};

export const apiPatch = (path, body, configOutside) => {
  axiosInstance.interceptors.request.use((config) => {
    if (configOutside && configOutside.contentType) {
      config.headers['Content-Type'] = configOutside.contentType;
    }
    return config;
  });

  if (configOutside && configOutside.contentType) {
    return axiosInstance.patch(path, body);
  }

  return axiosInstance.patch(path, JSON.stringify(body));
};

export const apiDelete = (path, data) => {
  return axiosInstance.delete(path, { data });
};
