export const FETCH_GIFS = '/app/gifs/FETCH_GIFS';
export const FETCH_GIFS_SUCCESS = '/app/gifs/FETCH_GIFS_SUCCESS';
export const FETCH_GIFS_FAIL = '/app/gifs/FETCH_GIFS_FAIL';
export const RESET_GIFS_SEARCH = '/app/gifs/RESET_GIFS_SEARCH';
export const TOGGLE_TO_FAVORITES = '/app/gifs/TOGGLE_TO_FAVORITES';
export const ADD_TO_FAVORITES = '/app/gifs/ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = '/app/gifs/REMOVE_FROM_FAVORITES';

export const fetchGifs = (searchQuery: string, searchQuery2: string) => ({
  type: FETCH_GIFS,
  payload: { searchQuery, searchQuery2 },
});

export const fetchGifsSuccess = (gifSearch: any) => ({
  type: FETCH_GIFS_SUCCESS,
  payload: { gifSearch },
});

export const toggleToFavorites = (gifId: string, isFavorite: boolean) => ({
  type: TOGGLE_TO_FAVORITES,
  payload: { gifId, isFavorite },
});

export const addToFavorites = (gifId: string) => ({
  type: ADD_TO_FAVORITES,
  payload: gifId,
});

export const removeFromFavorites = (gifId: string) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: gifId,
});
