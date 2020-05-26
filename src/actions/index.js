export const SET_NAME = 'SET_NAME';
export const RESET_NAME = 'RESET_NAME';

export const setName = (value) => ({
  type: SET_NAME,
  payload: value,
});

export const resetName = () => ({
  type: RESET_NAME,
  payload: '',
});
