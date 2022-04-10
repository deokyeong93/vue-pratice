import axios from 'axios';

export default {
  methods: {
    async $api(url, method, data) {
      try {
        const result = await axios({
          method,
          url,
          data,
        });
        return result.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
