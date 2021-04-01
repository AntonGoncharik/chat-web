/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';

class RoomsStore {
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  createRoom(room) {
    this.data.push(room);
  }

  updateRoom(room) {
    const oldRoom = this.data.find((item) => item._id === room._id);
    if (oldRoom) {
      console.log(1);
    }
  }
}

export default new RoomsStore();
