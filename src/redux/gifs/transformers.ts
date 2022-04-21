export const transformGifs = data => {
  return data.map(gif => {
    return {
      id: gif.id,
      state: gif.state,
      total: data.length
    };
  });
};
