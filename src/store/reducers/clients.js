import {
  CREATE_CLIENT_SUCCESS,
  CREATE_CLIENT_ERROR,
  FETCH_ALL_CLIENTS_SUCCESS,
  FETCH_CLIENT_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  clients: {},
  client: {},
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_CLIENTS_SUCCESS:
      return { ...state, clients: { ...payload } };
    case FETCH_CLIENT_SUCCESS:
      return { ...state, client: { ...payload } };
    case CREATE_CLIENT_SUCCESS:
      return { ...state, error: null };
    case CREATE_CLIENT_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
