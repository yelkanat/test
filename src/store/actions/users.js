import { NotificationManager } from "react-notifications";
import { LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./actionTypes";
import axios from "../../axios";

const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

const loginUserFailure = (error) => ({
  type: LOGIN_USER_FAILURE,
  payload: error,
});
const headers = {
  "Content-Type": "application/json",
  Authorization: "Basic Og==",
};
export const loginUser = (
  userData,
  formikIsSubmittingSetter,
  formikFieldSetter
) => (dispatch) => {
  axios.post("/token/", userData, { headers: headers }).then(
    (response) => {
      dispatch(loginUserSuccess(response.data));
    },
    (error) => {
      if (error.response && error.response.data) {
        dispatch(loginUserFailure(error.response.data));
        formikFieldSetter("password", "");
        NotificationManager.error("Неправильно указаны данные");
      } else {
        dispatch(loginUserFailure(error));
        NotificationManager.error("Что-то пошло не так");
      }
      formikIsSubmittingSetter(false);
    }
  );
};
