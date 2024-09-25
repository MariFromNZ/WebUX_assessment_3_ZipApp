//Mariia, created main logic for CRUD

import axios from "axios";

const urlPrefix = "http://localhost:8000";


export const getComments = () => {
  return axios.get(urlPrefix + "/comments");
};

export const addComments = (data) => {
  return axios.post(urlPrefix + "/comments", data);
};

export const deleteComments = (id) => {
  return axios.delete(urlPrefix + "/comments/" + id);
};

export const updateComments = (id, data) => {
  return axios.put(urlPrefix + "/comments/" + id, data);
};