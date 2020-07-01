import axios from "../../axios";

import {
  CREATE_CLIENT_SUCCESS,
  CREATE_CLIENT_ERROR,
  FETCH_ALL_CLIENTS_SUCCESS,
  FETCH_CLIENT_SUCCESS,
} from "./actionTypes";

const fetchAllClientsSuccess = (clients) => ({
  type: FETCH_ALL_CLIENTS_SUCCESS,
  payload: clients,
});

export const fetchAllClients = () => (dispatch) => {
  axios.get("/companies/?page=1").then((res) => {
    dispatch(fetchAllClientsSuccess(res.data));
  });
};

export const removeClient = (clientId) => (dispatch) => {
  return axios.delete(`/companies/${clientId}/`).then(() => {
    dispatch(fetchAllClients());
  });
};

const createClientSuccess = (newClient) => ({
  type: CREATE_CLIENT_SUCCESS,
  payload: newClient,
});

const createClientError = (error) => ({
  type: CREATE_CLIENT_ERROR,
  payload: error,
});

export const createNewClient = (clientData, handleClose) => (dispatch) => {
  axios.post("/companies/", clientData).then(
    () => {
      dispatch(createClientSuccess());
      dispatch(fetchAllClients());
      handleClose();
    },
    (error) => dispatch(createClientError(error))
  );
};

const fetchClientSuccess = (client) => ({
  type: FETCH_CLIENT_SUCCESS,
  payload: client,
});
export const readClient = (clientId) => (dispatch) => {
  axios
    .get(`/companies/${clientId}/`)
    .then((res) => {
      dispatch(fetchClientSuccess(res.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateClient = (clientId, client) => (dispatch) => {
  console.log("action", clientId, client);
  axios
    .put(`/companies/${clientId}/`, client)
    .then(() => {
      dispatch(readClient(clientId));
    })
    .catch((error) => {
      console.log(error);
    });
};
