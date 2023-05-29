import { RecipeList } from "../Components/RecipeList";
import { Sidebar } from "../Components/Sidebar";
import styled from "styled-components";

export const Homepage = () => {
  return (
    <DIV>
      <Sidebar />
      <RecipeList />
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 10px;
`;
