import React, { useState } from "react";
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
  TodaysMenuFoodCountButton, // Assuming you will style this
} from "../TodaysMenuItem/styledComponents";

import {
  DeleteButton,
  EditButton,
  SaveButton,
  CancelButton,
  AvailabilityCheckbox,
  ButtonsContainer,
} from "./styledComponents";

interface Item {
  id: number; // Add an ID for the item
  name: string;
  price: number;
  description: string;
  item_image_url: string;
  available: boolean; // Availability status
}

interface VendorTodaysMenuItemProps {
  item: Item;
  quantity: number;
  onDelete: (id: number) => void; // Function to delete an item
  onEdit: (updatedItem: Item) => void; // Function to edit an item
}

const VendorTodaysMenuItem: React.FC<VendorTodaysMenuItemProps> = ({
  item,
  quantity,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(item.name);
  const [updatedPrice, setUpdatedPrice] = useState(item.price);
  const [available, setAvailable] = useState(item.available);

  const handleAddClick = () => {
    console.log("handleAddClick");
  };

  const handleMinusClick = () => {
    console.log("handleMinusClick");
  };

  const handleEditSubmit = () => {
    const updatedItem = {
      ...item,
      name: updatedName,
      price: updatedPrice,
      available,
    };
    onEdit(updatedItem);
    setIsEditing(false);
  };

  return (
    <TodaysMenuItemContainer
      data-testid="TodayMenuItemContainer"
      style={{ width: "90%", margin: "auto" }}
    >
      <TodaysMenuItemDescriptionContainer>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              placeholder="Item Name"
              style={{ width: "80%" }}
            />
            <input
              type="number"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(Number(e.target.value))}
              placeholder="Price"
              style={{ width: "80%" }}
            />
            <AvailabilityCheckbox>
              Available
              <input
                type="checkbox"
                checked={available}
                onChange={() => setAvailable((prev) => !prev)}
                style={{ width: "45%" }}
              />
            </AvailabilityCheckbox>
            <ButtonsContainer>
              <SaveButton onClick={handleEditSubmit}>Save</SaveButton>
              <CancelButton onClick={() => setIsEditing(false)}>
                Cancel
              </CancelButton>
            </ButtonsContainer>
          </div>
        ) : (
          <>
            <TodaysMenuItemDescriptionHeading>
              {item.name}
            </TodaysMenuItemDescriptionHeading>
            <TodaysMenuItemPrice>{`₹${item.price}`}</TodaysMenuItemPrice>
            <TodaysMenuItemDescription>
              {item.description}
            </TodaysMenuItemDescription>
            <label>
              Available
              <input
                type="checkbox"
                checked={available}
                onChange={() => setAvailable((prev) => !prev)}
              />
            </label>
            <ButtonsContainer>
              <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
              <DeleteButton onClick={() => onDelete(item.id)}>
                Delete
              </DeleteButton>
            </ButtonsContainer>
          </>
        )}
      </TodaysMenuItemDescriptionContainer>
      <TodaysMenuFoodImageContainer>
        <TodaysMenuFoodImage src={item.item_image_url} alt={item.name} />
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

export default VendorTodaysMenuItem;
