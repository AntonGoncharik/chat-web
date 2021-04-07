/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';

import { MessagesService } from '../api';

class MessagesStore {
  data = {
    loading: false,
    list: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  createMessage(message) {
    this.data.list.push(message);
  }

  clearMessages() {
    this.data.list.length = 0;
  }

  async getMessages(roomId) {
    try {
      this.data.loading = true;

      const result = await MessagesService.getMessages(roomId);

      this.data.list = [...this.data.list, ...result.data];
    } catch (error) {
      throw new Error(error);
    } finally {
      this.data.loading = false;
    }
  }
}

export default new MessagesStore();
