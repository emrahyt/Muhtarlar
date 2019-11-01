import {
  FETCH_USER,
  FETCH_USERBYEMAIL,
  SIGN_UP,
  SIGN_IN,
  FETCH_USERBYID,
  USER_UPDATE,
  NEIGHBOURHOOD_UPDATE,
  ROLE_UPDATE,
  CHANGE_PASSWORD
} from "./types";
import axios from "../axios/axios";
import history from "../history";

export const fetchUser = id => async dispatch => {
  console.log(id);
  const response = await axios.get(`/user/${id}`);
  console.log(response);
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchUserById = userId => async dispatch => {
  console.log(userId);
  const response = await axios.get(`/userbyid/${userId}`);
  console.log(response);
  dispatch({ type: FETCH_USERBYID, payload: response.data });
};

export const fetchUserByEmail = email => async dispatch => {
  const response = await axios.get(`/useremail/${email}`);
  dispatch({ type: FETCH_USERBYEMAIL, payload: response.data });
};

export const signUp = userData => async dispatch => {
  const response = await axios.post("/signup", { userData });
  if (response.data === "phoneNo duplicate") {
    return alert("Telefon Numarası Kullanılmaktadır");
  } else if (response.data === "email duplicate") {
    return alert("Email Kullanılmaktadır");
  } else {
    return (
      dispatch({ type: SIGN_UP, payload: response.data }), history.push("/")
    );
  }
};

export const signIn = info => async dispatch => {
  const response = await axios.post("/auth/signin", { info });
  dispatch({ type: SIGN_IN, payload: response.data });
  localStorage.setItem("auth", response.data.auth);
  localStorage.setItem("userId", response.data.id);
  localStorage.setItem("neighbourhoodId", response.data.user.neighbourhoodId);
  localStorage.setItem("role", response.data.user.role);
  localStorage.setItem(
    "neighbourhoodName",
    response.data.user.neighbourhoodName
  );

  history.push("/");
};

export const editUser = (userId, data) => async dispatch => {
  console.log(userId, data);
  const response = await axios.put(`/userupdate/${userId}`, data);
  console.log(response);
  console.log(JSON.parse(response.config.data));
  const array = [];
  array.push(JSON.parse(response.config.data));
  console.log(array);
  dispatch({
    type: USER_UPDATE,
    payload: array
  });
  localStorage.clear();
  history.push("/girişyap");
};

export const editNeighbourhood = (userId, data) => async dispatch => {
  console.log(userId, data);
  const response = await axios.put(`/neighbourhoodupdate/${userId}`, data);
  console.log(response);
  console.log(JSON.parse(response.config.data));
  const array = [];
  array.push(JSON.parse(response.config.data));
  console.log(array);
  dispatch({
    type: NEIGHBOURHOOD_UPDATE,
    payload: array
  });
  localStorage.clear();
  history.push("/girişyap");
};

export const editRole = (userId, data) => async dispatch => {
  console.log(userId, data);
  const response = await axios.put(`/roleupdate/${userId}`, data);
  console.log(response);
  console.log(JSON.parse(response.config.data));
  const array = [];
  array.push(JSON.parse(response.config.data));
  console.log(array);
  dispatch({
    type: ROLE_UPDATE,
    payload: array
  });
  localStorage.clear();
  history.push("/girişyap");
};

export const editPassword = (userId, data) => async dispatch => {
  console.log(userId, data);
  const response = await axios.put(`/passwordchange/${userId}`, data);
  console.log(response);
  console.log(JSON.parse(response.config.data));
  const array = [];
  array.push(JSON.parse(response.config.data));
  console.log(array);
  dispatch({
    type: CHANGE_PASSWORD,
    payload: array
  });
  localStorage.clear();
  history.push("/girişyap");
};
