import axios from "../../axios";
import { FEACH_BANK_DETALIS_SUCCESS } from "./actionTypes";

const fetchBankDetalisSuccess = (detalis) => ({
  type: FEACH_BANK_DETALIS_SUCCESS,
  payload: detalis,
});

export const fetchBankDetalis = (id) => (dispatch) => {
  console.log(id);
  axios.get(`/companies/:company_pk/bank_details/?page=${id}`).then((res) => {
    dispatch(fetchBankDetalisSuccess(res.data));
  });
};
