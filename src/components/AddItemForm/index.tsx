// import {
//   AddItemFormMainContainer,
//   FormItemContainer,
//   FormItemInput,
//   FormItemLabel,
//   FormItemSubContainer,
// } from "./styledComponents";

// const AddItemForm = () => {
//   return (
//     <AddItemFormMainContainer>
//       <FormItemContainer>
//         <FormItemSubContainer>
//           <FormItemLabel>Dish Name</FormItemLabel>
//           <FormItemInput type="text" />
//         </FormItemSubContainer>

//         <FormItemSubContainer>
//           <FormItemLabel>Description</FormItemLabel>
//           <FormItemInput type="text" />
//         </FormItemSubContainer>

//         <FormItemSubContainer>
//           <FormItemLabel>Quantity</FormItemLabel>
//           <FormItemInput type="text" />
//         </FormItemSubContainer>

//         <FormItemSubContainer>
//           <FormItemLabel>Price</FormItemLabel>
//           <FormItemInput type="text" />
//         </FormItemSubContainer>

//         <FormItemSubContainer>
//           <FormItemLabel>Veg / Non Veg</FormItemLabel>
//           <FormItemInput type="text" />
//         </FormItemSubContainer>

//         <FormItemSubContainer>
//           <FormItemLabel>Category</FormItemLabel>
//           <FormItemInput type="text" />
//         </FormItemSubContainer>

//         <FormItemSubContainer>
//           <FormItemLabel>Image</FormItemLabel>
//           <FormItemInput type="text" />
//         </FormItemSubContainer>
//       </FormItemContainer>
//     </AddItemFormMainContainer>
//   );
// };

// export default AddItemForm;

import { GlobalButton } from "../AllYourFavorites/styledComponents";
import {
  AddItemFormMainContainer,
  AddItemFormContainer,
  FormItemContainer,
  FormItemInput,
  FormItemLabel,
  FormItemSubContainer,
  FormItemSelect,
  FormOptionElement,
  FormItemImageInput,
} from "./styledComponents";
import { useState } from "react";

const AddItemForm = () => {
  const [formData, setFormData] = useState({
    dishName: "",
    description: "",
    quantity: "",
    price: "",
    category: "",
    vegNonVeg: "Veg",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <AddItemFormMainContainer>
      <AddItemFormContainer onSubmit={handleSubmit}>
        <FormItemContainer>
          <FormItemSubContainer>
            <FormItemLabel>Dish Name</FormItemLabel>
            <FormItemInput
              type="text"
              name="dishName"
              value={formData.dishName}
              onChange={handleChange}
              required
            />
          </FormItemSubContainer>

          <FormItemSubContainer>
            <FormItemLabel>Description</FormItemLabel>
            <FormItemInput
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormItemSubContainer>

          <FormItemSubContainer>
            <FormItemLabel>Quantity</FormItemLabel>
            <FormItemInput
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </FormItemSubContainer>

          <FormItemSubContainer>
            <FormItemLabel>Price</FormItemLabel>
            <FormItemInput
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </FormItemSubContainer>

          <FormItemSubContainer>
            <FormItemLabel>Veg / Non Veg</FormItemLabel>
            <FormItemSelect
              name="vegNonVeg"
              value={formData.vegNonVeg}
              onChange={handleChange}
            >
              <FormOptionElement value="Veg">Veg</FormOptionElement>
              <FormOptionElement value="Non-Veg">Non-Veg</FormOptionElement>
            </FormItemSelect>
          </FormItemSubContainer>

          <FormItemSubContainer>
            <FormItemLabel>Category</FormItemLabel>
            <FormItemInput
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </FormItemSubContainer>

          <FormItemSubContainer>
            <FormItemLabel>Image URL</FormItemLabel>
            <FormItemImageInput
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </FormItemSubContainer>

          <GlobalButton type="submit">Add Item</GlobalButton>
        </FormItemContainer>
      </AddItemFormContainer>
    </AddItemFormMainContainer>
  );
};

export default AddItemForm;
