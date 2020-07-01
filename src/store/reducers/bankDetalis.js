import { FEACH_BANK_DETALIS_SUCCESS } from "../actions/actionTypes";
const initialState = {
  detalis: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FEACH_BANK_DETALIS_SUCCESS:
      return { ...state, detalis: { ...payload } };
    default:
      return state;
  }
};
