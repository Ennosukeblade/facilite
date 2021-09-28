import axios from "axios";

export const getValues = () => {
  return axios.get("http://localhost:8000/percents");
};
export const getIntervals = () => {
  return axios.get("http://localhost:8000/intervals");
};
export const updateValue = (id, value) => {
  return axios.put(`http://localhost:8000/percents/${id}`, value);
};
export const updateInterval = (id, value) => {
  return axios.put(`http://localhost:8000/intervals/${id}`, value);
};
export const getAdmins = () => {
  return axios.get("http://localhost:8000/admins");
}