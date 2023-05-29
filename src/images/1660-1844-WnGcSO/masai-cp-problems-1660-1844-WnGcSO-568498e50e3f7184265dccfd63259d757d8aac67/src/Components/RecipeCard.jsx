import { Link } from "react-router-dom";

export const RecipeCard = ({name, price, image, id,category,type}) => {
  
  return (
    <div className={"recipe-card"} style={{width:"34%", border:"2px solid pink"}}>
      <img src={image} alt="image" className="recipe-image" style={{width:"100%"}}></img> 
      <p className="recipe-name">{name}</p>
      <p className="recipe-category">Category: {category}</p>
      <p className="recipe-type" style={type=="veg"?{color:"green"}:{color:"red"}}>Type: {type}</p>
      <p className="recipe-price">{price}</p>
      <Link to={`./recipe/${id}`}><button className="recipe-detail">View Ingredients</button></Link>
    </div>
  );
};
