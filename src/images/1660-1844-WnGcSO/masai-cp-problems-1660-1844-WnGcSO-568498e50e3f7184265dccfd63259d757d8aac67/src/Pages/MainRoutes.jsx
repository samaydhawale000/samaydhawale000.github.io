import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import { RecipeDetail } from "./RecipeDetail";
import { PrivateRoute } from "../Components/PrivateRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* Add all routes here */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/" element={<Homepage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/recipe/:id" element={
        <PrivateRoute><RecipeDetail/></PrivateRoute>
      } />
    </Routes>
  );
};
