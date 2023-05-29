import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { sortData } from "../Redux/RecipeReducer/action";

export const Sidebar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let dispatch = useDispatch();
  
  const handleChange=(e)=>{
    let params = {
      _order:e.target.value
    }
    setSearchParams(params)
  }

  useEffect(()=>{
    dispatch(sortData(searchParams.get))
  },[searchParams])

  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input data-testid="recipe-indian" type="checkbox" />
        <label>Indian</label>
        <br />
        <br />
        <input data-testid="recipe-italian" type="checkbox" />
        <label>Italian</label>
        <br />
        <br />
        <input data-testid="recipe-chinese" type="checkbox" />
        <label>Chinese</label>
        <br />
        <br />
        <input data-testid="recipe-thai" type="checkbox" />
        <label>Thai</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Veg / Non-Veg</h3>
      <div>
        <input data-testid="recipe-veg" type="checkbox" />
        <label>Veg</label>
        <br />
        <br />
        <input data-testid="recipe-non-veg" type="checkbox" />
        <label>Non Veg</label>
      </div>
      <br />
      <br />
      <br />
      <h3>Sort By Price</h3>
      <div onChange={(e)=>handleChange(e)}>
        <input data-testid="recipe-sort-asc" type="radio" name="sort" value="asc"/>
        <label>Ascending</label>
        <br />
        <br />
        <input data-testid="recipe-sort-desc" type="radio" name="sort"  value="desc"/>
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 13%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;
  box-shadow: 2px 2px 2px gray;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
