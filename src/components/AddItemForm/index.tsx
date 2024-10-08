import React, { useState } from "react";
import {
  TodaysMenuHeading,
  TodaysMenuMainContainer,
} from "../TodaysMenu/styledComponents";
import {
  AddItemFormElement,
  AddItemFormMainContainer,
  InputElement,
  InputLabel,
  StyledSelect,
  FileInputContainer,
  FileText,
  ImageInputElementContainer,
  HiddenFileInput,
  UploadIcon,
} from "./styledComponents";
import { useAddItemFormHandlers } from "./formHandlers";
import { GlobalButton } from "../AllYourFavorites/styledComponents";

const AddItemForm = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    dishName,
    description,
    price,
    category,
    vegNonVeg,
    onChangeDishName,
    onChangeDescription,
    onChangePrice,
    onChangeCategory,
    onChangeVegNonVeg,
    onChangeImage,
  } = useAddItemFormHandlers();

  const onSubmitSuccess = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Submitted:", {
      dishName,
      description,
      price,
      vegNonVeg,
      category,
      image: fileName,
    });
  };

  const vegNonVegOptions = [
    { value: "Veg", label: "Veg" },
    { value: "Non Veg", label: "Non Veg" },
  ];

  const categoryOptions = [
    { value: "Appetizer", label: "Appetizer" },
    { value: "Main Course", label: "Main Course" },
    { value: "Dessert", label: "Dessert" },
    { value: "Beverage", label: "Beverage" },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onChangeImage(file); // Pass the file to the handler
    }
  };

  const handleClick = () => {
    document.getElementById("fileUpload")?.click();
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
        <AddItemFormElement>
          <InputLabel>Price</InputLabel>
          <InputElement type="number" value={price} onChange={onChangePrice} />
        </AddItemFormElement>
        <AddItemFormElement>
          <InputLabel>Veg / Non Veg</InputLabel>
          <StyledSelect
            options={vegNonVegOptions}
            value={vegNonVegOptions.find(
              (option) => option.value === vegNonVeg
            )}
            onChange={onChangeVegNonVeg}
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: "8px",
                height: "40px",
                border: "none",
                textAlign: "start",
              }),
            }}
          />
        </AddItemFormElement>
        <AddItemFormElement>
          <InputLabel>Category</InputLabel>
          <StyledSelect
            options={categoryOptions}
            value={categoryOptions.find((option) => option.value === category)}
            onChange={onChangeCategory}
            styles={{
              control: (provided) => ({
                ...provided,
                borderRadius: "8px",
                height: "40px",
                border: "none",
                textAlign: "start",
              }),
            }}
          />
        </AddItemFormElement>
        <AddItemFormElement>
          <InputLabel>Image</InputLabel>
          <ImageInputElementContainer>
            <FileInputContainer onClick={handleClick}>
              <FileText>{fileName || "Upload File"}</FileText>
              <UploadIcon>
                <img src="/Images/upload-01.svg" alt="upload" />
              </UploadIcon>
              <HiddenFileInput
                type="file"
                id="fileUpload"
                onChange={handleFileChange}
              />
            </FileInputContainer>
          </ImageInputElementContainer>
        </AddItemFormElement>
        <GlobalButton type="submit">Add item</GlobalButton>
      </AddItemFormMainContainer>
    </TodaysMenuMainContainer>
  );
};

export default AddItemForm;
