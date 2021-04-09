/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';

import { RoomsService } from '../api';
import userStore from './user';
class RoomsStore {
  data = {
    loading: false,
    list: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  createRoom(room) {
    if (
      !this.data.list.length &&
      room.users.find((item) => item.userId === userStore.data.id)
    ) {
      return;
    }

    this.data.list.push(room);
  }

  updateRoom(room) {
    const oldRoom = this.data.list.find((item) => item._id === room._id);
    if (oldRoom) {
      console.log(1);
    }
  }

  async getRooms(userId) {
    try {
      this.data.loading = true;

      const result = await RoomsService.getRooms(userId);

      this.data.list = [...this.data.list, ...result.data];
    } catch (error) {
      throw new Error(error);
    } finally {
      this.data.loading = false;
    }
  }
}

export default new RoomsStore();
