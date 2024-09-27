import { useState } from "react";
import {
  PlusIcon,
  MinusIcon,
  TodaysMenuFoodAddButton,
  TodaysMenuFoodImage,
  TodaysMenuFoodImageContainer,
  TodaysMenuItemContainer,
  TodaysMenuItemDescription,
  TodaysMenuItemDescriptionContainer,
  TodaysMenuItemDescriptionHeading,
  TodaysMenuItemPrice,
  CountContainer,
  TodaysMenuFoodCountButton,
} from "./styledComponents";

interface MenuItem {
  item_id: number;
  name: string;
  price: number;
  description: string;
  item_image_url: string;
}

interface TodaysMenuItemProps {
  item: MenuItem;
  onAddItem: (item: MenuItem) => void;
  onRemoveItem: (item: MenuItem) => void;
  quantity: number;
}

const TodaysMenuItem = ({
  item,
  onAddItem,
  onRemoveItem,
  quantity,
}: TodaysMenuItemProps) => {
  const [, setCount] = useState(0);

  const handleAddClick = () => {
    setCount((prevCount) => prevCount + 1);
    onAddItem(item);
  };

  const handleMinusClick = () => {
    if (quantity > 0) {
      setCount((prevCount) => prevCount - 1);
      onRemoveItem(item);
    }
  };

  return (
    <TodaysMenuItemContainer data-testid="TodayMenuItemContainer">
      <TodaysMenuItemDescriptionContainer>
        <TodaysMenuItemDescriptionHeading>
          {item.name}
        </TodaysMenuItemDescriptionHeading>
        <TodaysMenuItemPrice>{`₹${item.price}`}</TodaysMenuItemPrice>
        <TodaysMenuItemDescription>
          {item.description}
        </TodaysMenuItemDescription>
      </TodaysMenuItemDescriptionContainer>
      <TodaysMenuFoodImageContainer>
        <TodaysMenuFoodImage src={item.item_image_url} />
        {quantity === 0 ? (
          <TodaysMenuFoodAddButton>
            ADD
            <PlusIcon
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleAddClick}
              data-testid="add-button"
            >
              <path
                d="M4.00008 1.66675V6.33341M1.66675 4.00008H6.33341"
                stroke="#CA8A04"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </PlusIcon>
          </TodaysMenuFoodAddButton>
        ) : (
          <CountContainer>
            <TodaysMenuFoodCountButton onClick={handleMinusClick}>
              <MinusIcon
                data-testid="minus-button"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66675 4.00008H6.33341"
                  stroke="#CA8A04"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </MinusIcon>
            </TodaysMenuFoodCountButton>
            <span>{quantity}</span>
            <TodaysMenuFoodCountButton onClick={handleAddClick}>
              <PlusIcon
                data-testid="plus-button"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.00008 1.66675V6.33341M1.66675 4.00008H6.33341"
                  stroke="#CA8A04"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </PlusIcon>
            </TodaysMenuFoodCountButton>
          </CountContainer>
        )}
      </TodaysMenuFoodImageContainer>
    </TodaysMenuItemContainer>
  );
};

export default TodaysMenuItem;
