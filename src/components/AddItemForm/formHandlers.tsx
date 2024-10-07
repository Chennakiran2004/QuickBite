import { useState } from "react";

export const useAddItemFormHandlers = () => {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [vegNonVeg, setVegNonVeg] = useState("veg"); // Default value set to 'veg'
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const onChangeDishName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDishName(event.target.value);
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const onChangeVegNonVeg = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setVegNonVeg(event.target.value);
  };

  const onChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  return {
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
  };
};
