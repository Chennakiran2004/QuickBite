import React, { useState } from "react";
import { TodaysMenuMainContainer } from "../TodaysMenu/styledComponents";
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
import {
  BackImage,
  SignAndLoginHeading,
  SignAndLoginInHeadingContainer,
} from "../SignIn/styledComponents";
import { useNavigate } from "react-router-dom";

const AddItemForm = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const navigate = useNavigate();

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
      onChangeImage(file);
    }
  };

  const handleClick = () => {
    document.getElementById("fileUpload")?.click();
  };

  const handleBack = () => {
    navigate("/VendorTodaysMenu");
  };

  return (
    <TodaysMenuMainContainer style={{ overflow: "scroll" }}>
      <SignAndLoginInHeadingContainer style={{ width: "90%", margin: "auto" }}>
        <BackImage
          data-testid="backImage"
          onClick={handleBack}
          src="/Images/back.svg"
        />
        <SignAndLoginHeading>Add Item</SignAndLoginHeading>
      </SignAndLoginInHeadingContainer>
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
