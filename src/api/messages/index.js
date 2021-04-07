/* eslint-disable no-undef */
import { apiGet } from '../api';

export default {
  async getMessages(roomId, page = 1, records = 20) {
    try {
      const result = await apiGet('/messages', {
        params: { roomId, page, records },
      });
      return { data: result.data, status: result.status };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};
