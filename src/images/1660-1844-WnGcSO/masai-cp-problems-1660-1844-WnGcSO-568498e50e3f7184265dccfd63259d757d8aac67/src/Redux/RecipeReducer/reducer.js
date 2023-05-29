import React from "react";
import {
  RECIPE_REQUEST_FAILURE,
  RECIPE_REQUEST_PENDING,
  RECIPE_REQUEST_SUCCESS,
} from "./actionTypes";
const InitialState = {
  isLoading: false,
  isError: false,
  recipe: [],
};

export function reducer(state = InitialState, { type, payload }) {
  switch (type) {
    case RECIPE_REQUEST_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case RECIPE_REQUEST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        recipe:payload
      };
    }
    case RECIPE_REQUEST_FAILURE: {
        return {
            ...state,
            isLoading: false,
            isError:true
          };
    }
    default:
      return state;
  }
}
