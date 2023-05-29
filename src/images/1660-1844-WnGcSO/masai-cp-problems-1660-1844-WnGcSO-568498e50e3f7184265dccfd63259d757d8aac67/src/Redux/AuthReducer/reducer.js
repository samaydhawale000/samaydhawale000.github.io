import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const InitialState  ={
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
  }

export  function reducer(state=InitialState, {type, payload}) {
    switch(type){
        case LOGIN_REQUEST :{
            return {
                ...state,
                isLoading:true
            }
        }
        case LOGIN_SUCCESS :{
            return {
                ...state,
                isLoading:false,
                isAuth: true,
                token:payload
            }
        }
        case LOGIN_FAILURE :{
            return {
                ...state,
                isLoading:false,
                isError :true
            }
        }
        default : return state
    }
  
}