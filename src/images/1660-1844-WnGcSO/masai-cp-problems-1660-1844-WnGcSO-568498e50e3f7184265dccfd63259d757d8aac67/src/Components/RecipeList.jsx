import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getData } from "../Redux/RecipeReducer/action";
import { RecipeCard } from "./RecipeCard";
export const RecipeList = () => {
  const data = useSelector(store => store.recipeReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getData())
  },[])
  return (
    <div style={{width:"100%"}}>
      <div data-testid="recipe-list" style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)", width:"100%", gap:"0"}}>
        {/* Map through the recipe using the recipe card here */
        data.recipe.length>0 && data.recipe.map((e,i)=>{
         return  <RecipeCard image ={e.image} id={e.id} name = {e.name} type={e.type} category={e.category} price={e.price} />
        })
        }
      </div>
    </div>
  );
};
