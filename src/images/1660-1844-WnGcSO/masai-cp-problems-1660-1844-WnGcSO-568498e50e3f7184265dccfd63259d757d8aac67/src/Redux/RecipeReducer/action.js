import axios from "axios";

import { RECIPE_REQUEST_FAILURE, RECIPE_REQUEST_PENDING, RECIPE_REQUEST_SUCCESS } from "./actionTypes";

export const getData = () => (dispatch) => {
    dispatch({type:RECIPE_REQUEST_PENDING})
  axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/recipe`).then((res) => {
    console.log(res.data);
    dispatch({type:RECIPE_REQUEST_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    console.log(err)
    dispatch({type:RECIPE_REQUEST_FAILURE})
})
};

export const sortData = (data) => (dispatch) => {
    console.log(data)
    dispatch({type:RECIPE_REQUEST_PENDING})
  axios(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/recipe?_sort=price$`).then((res) => {
    console.log(res.data);
    dispatch({type:RECIPE_REQUEST_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    console.log(err)
    dispatch({type:RECIPE_REQUEST_FAILURE})
})
};

