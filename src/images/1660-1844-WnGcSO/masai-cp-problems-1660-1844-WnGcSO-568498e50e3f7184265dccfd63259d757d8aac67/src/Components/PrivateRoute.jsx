import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({children}) => {
const data = useSelector(store => store.authReducer)
console.log(data.isAuth)
return data.isAuth? children : <Navigate to= "/login"/>
};
