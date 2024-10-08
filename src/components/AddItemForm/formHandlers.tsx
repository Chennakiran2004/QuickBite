import { useState } from "react";

export const useAddItemFormHandlers = () => {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [vegNonVeg, setVegNonVeg] = useState("Veg");
  const [category, setCategory] = useState("Main Course");
  const [image, setImage] = useState<File | null>(null);

  const onChangeDishName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDishName(event.target.value);
  };

  const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const onChangeVegNonVeg = (option: any) => {
    setVegNonVeg(option.value);
  };

  const onChangeCategory = (option: any) => {
    setCategory(option.value);
  };

  const onChangeImage = (file: File) => {
    setImage(file);
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
