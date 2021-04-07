/* eslint-disable no-undef */
import { apiGet } from '../api';

export default {
  async getRooms(userId, page = 1, records = 20) {
    try {
      const result = await apiGet('/rooms', {
        params: { userId, page, records },
      });
      return { data: result.data, status: result.status };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
};
