import { useEffect, useState } from "react";
import CategoryDropDown from "../CategoryDropDown";
import CheckoutPopup from "../CheckoutPopup";
import TabBar from "../TabBar";
import { useDispatch, useSelector } from "react-redux";
import {
  TodaysMenuHeading,
  TodaysMenuMainContainer,
  TabBarContainer,
  TodaysMenuSubContainer,
  CategoryDropDownListContainer,
  CheckOutPopupHomeContainer,
} from "./styledComponents";
import Modal from "../Modal";
import { AppDispatch, RootState } from "../../StoreFolder/store";
import {
  fetchCategories,
  addToCart,
  removeFromCart,
} from "../../ReduxSlices/TodaysMenuSlice";
import { MenuItem } from "../../Models/TodaysMenuModel";

const TodaysMenu = () => {
  const [showPage, setShowPage] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { categories, cart } = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddItem = (item: MenuItem) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (item: MenuItem) => {
    dispatch(removeFromCart(item));
  };

  const getItemQuantity = (item: MenuItem) => {
    const cartItem = cart.find((cartItem) => cartItem.item_id === item.item_id);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleButtonClick = () => {
    setShowPage(true);
    console.log("hello");
  };

  const handleCloseButtonClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowPage(false);
      setIsExiting(false);
    }, 500);
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <TodaysMenuMainContainer>
      <TodaysMenuHeading>Today's Menu</TodaysMenuHeading>
      <TodaysMenuSubContainer>
        <CategoryDropDownListContainer>
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryDropDown
                key={category.category_id}
                title={category.name}
                items={category.items}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
                getItemQuantity={getItemQuantity}
              />
            ))
          ) : (
            <p>No categories available</p>
          )}
        </CategoryDropDownListContainer>
      </TodaysMenuSubContainer>
      <TabBarContainer>
        <CheckOutPopupHomeContainer onClick={handleButtonClick}>
          <CheckoutPopup
            totalItems={getTotalItems()}
            totalPrice={getTotalPrice()}
          />
        </CheckOutPopupHomeContainer>
        <TabBar />
      </TabBarContainer>
      <Modal
        cartItems={cart.map((item) => ({
          id: item.item_id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          description: item.description,
        }))}
        totalPrice={getTotalPrice()}
        showModal={showPage}
        isExiting={isExiting}
        onClose={handleCloseButtonClick}
        onAddItem={(item) => handleAddItem({ ...item, item_image_url: "" })}
        onRemoveItem={(item) =>
          handleRemoveItem({
            item_id: item.id,
            name: "",
            price: 0,
            description: "",
            item_image_url: "",
          })
        }
      />
    </TodaysMenuMainContainer>
  );
};

export default TodaysMenu;
