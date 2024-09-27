import { useState } from "react";
import {
  CategoryDropDownHeading,
  CategoryDropDownImage,
  CategoryDropDownSubContainer,
  CategoryDrownDownMainContainer,
  MenuItemsList,
} from "./styledComponents";
import TodaysMenuItem from "../TodaysMenuItem";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CategoryDropDownProps {
  title: string;
  items: MenuItem[];
  onAddItem: (item: MenuItem) => void;
  onRemoveItem: (item: MenuItem) => void;
  getItemQuantity: (item: MenuItem) => number;
}

const CategoryDropDown = ({
  title,
  items,
  onAddItem,
  onRemoveItem,
  getItemQuantity,
}: CategoryDropDownProps) => {
  const [showMenuItemsList, setShowMenuItemsList] = useState(false);

  const toggleMenuItemsList = () => {
    setShowMenuItemsList(!showMenuItemsList);
  };

  return (
    <CategoryDrownDownMainContainer data-testid="CategoryDrownDownMainContainer">
      <CategoryDropDownSubContainer onClick={toggleMenuItemsList}>
        <CategoryDropDownHeading data-testid="category-title">
          {title}
        </CategoryDropDownHeading>
        <CategoryDropDownImage
          data-testid="dropDown-arrow-image"
          isRotates={showMenuItemsList}
          data-rotates={showMenuItemsList}
          src="/Images/back.svg"
        />
      </CategoryDropDownSubContainer>
      <MenuItemsList
        role="list"
        data-rotates={showMenuItemsList}
        isRotates={showMenuItemsList}
      >
        {showMenuItemsList &&
          items.map((item, index) => (
            <TodaysMenuItem
              key={index}
              item={item}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
              quantity={getItemQuantity(item)}
            />
          ))}
      </MenuItemsList>
    </CategoryDrownDownMainContainer>
  );
};

export default CategoryDropDown;
