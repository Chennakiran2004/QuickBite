// import React from "react";
// import {
//   TodaysMenuHeading,
//   TodaysMenuMainContainer,
// } from "../TodaysMenu/styledComponents";
// import {
//   AddItemFormElement,
//   AddItemFormMainContainer,
//   InputElement,
//   InputLabel,
// } from "./styledComponents";
// import { useAddItemFormHandlers } from "./formHandlers";
// import { GlobalButton } from "../AllYourFavorites/styledComponents";

// const AddItemForm = () => {
//   const {
//     dishName,
//     description,
//     price,
//     category,
//     image,
//     onChangeDishName,
//     onChangeDescription,
//     onChangePrice,
//     onChangeCategory,
//     onChangeImage,
//   } = useAddItemFormHandlers();

//   const onSubmitSuccess = (event: React.FormEvent) => {
//     event.preventDefault();
//     console.log("success");
//   };

//   return (
//     <TodaysMenuMainContainer>
//       <TodaysMenuHeading>Add Item</TodaysMenuHeading>
//       <AddItemFormMainContainer onSubmit={onSubmitSuccess}>
//         <AddItemFormElement>
//           <InputLabel>Dish Name</InputLabel>
//           <InputElement
//             type="text"
//             value={dishName}
//             onChange={onChangeDishName}
//           />
//         </AddItemFormElement>
//         <AddItemFormElement>
//           <InputLabel>Description</InputLabel>
//           <InputElement
//             type="text"
//             value={description}
//             onChange={onChangeDescription}
//           />
//         </AddItemFormElement>
//         <AddItemFormElement>
//           <InputLabel>Price</InputLabel>
//           <InputElement type="text" value={price} onChange={onChangePrice} />
//         </AddItemFormElement>
//         <AddItemFormElement>
//           <InputLabel>Veg / Non Veg</InputLabel>
//           <InputElement type="text" />
//         </AddItemFormElement>
//         <AddItemFormElement>
//           <InputLabel>Category</InputLabel>
//           <InputElement
//             type="text"
//             value={category}
//             onChange={onChangeCategory}
//           />
//         </AddItemFormElement>
//         <AddItemFormElement>
//           <InputLabel>Image</InputLabel>
//           <InputElement type="text" value={image} onChange={onChangeImage} />
//         </AddItemFormElement>
//         <GlobalButton type="submit">Add item</GlobalButton>{" "}
//       </AddItemFormMainContainer>
//     </TodaysMenuMainContainer>
//   );
// };

// export default AddItemForm;

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
  StyledSelect, // Use the styled select
} from "./styledComponents";
import { useAddItemFormHandlers } from "./formHandlers";
import { GlobalButton } from "../AllYourFavorites/styledComponents";

const AddItemForm = () => {
  const {
    dishName,
    description,
    price,
    category,
    image,
    onChangeDishName,
    onChangeDescription,
    onChangePrice,
    onChangeCategory,
    onChangeImage,
    onChangeVegNonVeg,
  } = useAddItemFormHandlers();

  const onSubmitSuccess = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("success");
  };

  // Options for Veg / Non Veg and Category
  const vegNonVegOptions = [
    { value: "Veg", label: "Veg" },
    { value: "Non Veg", label: "Non Veg" },
  ];

  const categoryOptions = [
    { value: "Appetizer", label: "Appetizer" },
    { value: "Main Course", label: "Main Course" },
    { value: "Dessert", label: "Dessert" },
    { value: "Beverage", label: "Beverage" },
  ]; // Add more categories as needed

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
          <InputElement type="text" value={price} onChange={onChangePrice} />
        </AddItemFormElement>
        <AddItemFormElement>
          <InputLabel>Veg / Non Veg</InputLabel>
          <StyledSelect
            options={vegNonVegOptions}
            // onChange={onChangeVegNonVeg}
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
            // onChange={onChangeCategory}
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
          <InputElement type="text" value={image} onChange={onChangeImage} />
        </AddItemFormElement>
        <GlobalButton type="submit">Add item</GlobalButton>
      </AddItemFormMainContainer>
    </TodaysMenuMainContainer>
  );
};

export default AddItemForm;
