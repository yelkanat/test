import { LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from "../actions/actionTypes";

const initialState = {
  user: null,
  loginError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, loginError: null, user: { ...payload } };
    case LOGIN_USER_FAILURE:
      return { ...state, loginError: payload };
    default:
      return state;
  }
};
