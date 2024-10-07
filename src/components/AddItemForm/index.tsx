import React from "react";
import {
  TodaysMenuHeading,
  TodaysMenuMainContainer,
} from "../TodaysMenu/styledComponents";
import {
  AddItemFormElement,
  AddItemFormMainContainer,
  InputElement,
  InputLabel,
} from "./styledComponents";
import { useAddItemFormHandlers } from "./formHandlers";
import { GlobalButton } from "../AllYourFavorites/styledComponents";

const AddItemForm = () => {
  const {
    dishName,
    description,
    price,
    vegNonVeg,
    category,
    image,
    onChangeDishName,
    onChangeDescription,
    onChangePrice,
    onChangeVegNonVeg,
    onChangeCategory,
    onChangeImage,
  } = useAddItemFormHandlers();

  const onSubmitSuccess = () => {
    console.log("success");
  };

  return (
    <TodaysMenuMainContainer>
      <TodaysMenuHeading>Add Item</TodaysMenuHeading>
      <AddItemFormMainContainer onSubmit={onSubmitSuccess}>
        <AddItemFormElement>
          <InputLabel>Dish Name</InputLabel>
          <InputElement
            type="text"
            value={dishName}
            onChange={onChangeDishName}
          />
        </AddItemFormElement>

        <AddItemFormElement>
          <InputLabel>Description</InputLabel>
          <InputElement
            type="text"
            value={description}
            onChange={onChangeDescription}
          />
        </AddItemFormElement>

        {/* <AddItemFormElement>
          <InputLabel>Quantity</InputLabel>
          <InputElement
            type="number"
            value={quantity}
            onChange={onChangeQuantity}
          />
        </AddItemFormElement> */}

        <AddItemFormElement>
          <InputLabel>Price</InputLabel>
          <InputElement type="text" value={price} onChange={onChangePrice} />
        </AddItemFormElement>

        <AddItemFormElement>
          <InputLabel>Veg / Non Veg</InputLabel>
          <InputElement
            type="text"
            value={vegNonVeg}
            // onChange={onChangeVegNonVeg}
          />
        </AddItemFormElement>

        <AddItemFormElement>
          <InputLabel>Category</InputLabel>
          <InputElement
            type="text"
            value={category}
            onChange={onChangeCategory}
          />
        </AddItemFormElement>

        <AddItemFormElement>
          <InputLabel>Image</InputLabel>
          <InputElement type="text" value={image} onChange={onChangeImage} />
        </AddItemFormElement>

        <GlobalButton type="button">Add item</GlobalButton>
      </AddItemFormMainContainer>
    </TodaysMenuMainContainer>
  );
};

export default AddItemForm;
