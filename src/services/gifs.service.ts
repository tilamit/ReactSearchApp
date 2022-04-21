// HTTP request library
import axios from 'axios';

export const getGifs = async (val1, val2) => {
  try {
    const result = await axios.get(`https://api.github.com/repos/${val1}/${val2}/issues?per_page=100`);
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
