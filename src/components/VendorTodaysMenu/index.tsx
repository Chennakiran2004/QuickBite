import { useNavigate } from "react-router-dom";
import {
  TodaysMenuHeading,
  TodaysMenuMainContainer,
} from "../TodaysMenu/styledComponents";
import { AddItem, AddItemContainer } from "./styledComponents";
import VendorTodaysMenuItem from "../VendorTodaysMenuItem";

const VendorTodaysMenu = () => {
  const navigate = useNavigate();

  const handleNavigateAddItemForm = () => {
    navigate("/addItemForm");
  };

  const dummyData = {
    item: {
      id: 1,
      name: "Grilled Chicken",
      price: 150,
      description: "Juicy grilled chicken .",
      item_image_url: "/Images/Food1.svg",
      available: true,
    },
    quantity: 0,
  };

  return (
    <TodaysMenuMainContainer>
      <TodaysMenuHeading>Today's Menu</TodaysMenuHeading>
      <AddItemContainer>
        <AddItem onClick={handleNavigateAddItemForm}>+ Add Item</AddItem>
      </AddItemContainer>
      <VendorTodaysMenuItem
        item={dummyData.item}
        quantity={dummyData.quantity}
        onDelete={(id) => console.log(`Delete item with id: ${id}`)}
        onEdit={(updatedItem) => console.log(updatedItem)}
      />
    </TodaysMenuMainContainer>
  );
};

export default VendorTodaysMenu;
