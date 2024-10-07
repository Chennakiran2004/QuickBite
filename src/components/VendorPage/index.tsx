import { useNavigate } from "react-router-dom";
import {
  TodaysMenuHeading,
  TodaysMenuMainContainer,
} from "../TodaysMenu/styledComponents";
import { AddItem, AddItemContainer } from "./styledComponents";

const VendorHomePage = () => {
  const navigate = useNavigate();

  const handleNavigateAddItemForm = () => {
    navigate("/addItemForm");
  };

  return (
    <TodaysMenuMainContainer>
      <TodaysMenuHeading>Today's Menu</TodaysMenuHeading>
      <AddItemContainer>
        <AddItem onClick={handleNavigateAddItemForm}>+Add Item</AddItem>
      </AddItemContainer>
    </TodaysMenuMainContainer>
  );
};

export default VendorHomePage;
