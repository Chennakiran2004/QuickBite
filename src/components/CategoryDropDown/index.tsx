// import { useState } from "react";
// import {
//   CategoryDropDownHeading,
//   CategoryDropDownImage,
//   CategoryDropDownSubContainer,
//   CategoryDrownDownMainContainer,
//   MenuItemsList,
// } from "./styledComponents";
// import TodaysMenuItem from "../TodaysMenuItem";

// interface MenuItem {
//   item_id: string;
//   name: string;
//   price: number;
//   description: string;
//   item_image_url: string;
// }

// interface CategoryDropDownProps {
//   title: string;
//   items: MenuItem[];
//   onAddItem: (item: MenuItem) => void;
//   onRemoveItem: (item: MenuItem) => void;
//   getItemQuantity: (item: MenuItem) => number;
// }

// const CategoryDropDown = ({
//   title,
//   items,
//   onAddItem,
//   onRemoveItem,
//   getItemQuantity,
// }: CategoryDropDownProps) => {
//   const [showMenuItemsList, setShowMenuItemsList] = useState(false);

//   const toggleMenuItemsList = () => {
//     setShowMenuItemsList(!showMenuItemsList);
//   };

//   return (
//     <CategoryDrownDownMainContainer data-testid="CategoryDrownDownMainContainer">
//       <CategoryDropDownSubContainer onClick={toggleMenuItemsList}>
//         <CategoryDropDownHeading data-testid="category-title">
//           {title}
//         </CategoryDropDownHeading>
//         <CategoryDropDownImage
//           data-testid="dropDown-arrow-image"
//           isRotates={showMenuItemsList}
//           data-rotates={showMenuItemsList}
//           src="/Images/back.svg"
//         />
//       </CategoryDropDownSubContainer>
//       <MenuItemsList
//         role="list"
//         data-rotates={showMenuItemsList}
//         isRotates={showMenuItemsList}
//       >
//         {showMenuItemsList &&
//           items.map((item, index) => (
//             <TodaysMenuItem
//               key={item.item_id}
//               item={item}
//               onAddItem={onAddItem}
//               onRemoveItem={onRemoveItem}
//               quantity={getItemQuantity(item)}
//             />
//           ))}
//       </MenuItemsList>
//     </CategoryDrownDownMainContainer>
//   );
// };

// export default CategoryDropDown;

import { useState } from "react";
import {
  CategoryDropDownHeading,
  CategoryDropDownImage,
  CategoryDropDownSubContainer,
  CategoryDrownDownMainContainer,
  MenuItemsList,
} from "./styledComponents";
import TodaysMenuItem from "../TodaysMenuItem";
import { motion } from "framer-motion"; // Import framer-motion

interface MenuItem {
  item_id: string;
  name: string;
  price: number;
  description: string;
  item_image_url: string;
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

  const listVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
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

      <motion.div
        initial="hidden"
        animate={showMenuItemsList ? "visible" : "hidden"}
        variants={listVariants}
        style={{ overflow: "hidden" }} // This hides content during animation
      >
        <MenuItemsList
          role="list"
          data-rotates={showMenuItemsList}
          isRotates={showMenuItemsList}
        >
          {items.map((item) => (
            <TodaysMenuItem
              key={item.item_id}
              item={item}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
              quantity={getItemQuantity(item)}
            />
          ))}
        </MenuItemsList>
      </motion.div>
    </CategoryDrownDownMainContainer>
  );
};

export default CategoryDropDown;
