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
  const [showModal, setShowModal] = useState(false);
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

  const handleCheckoutClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        <CheckOutPopupHomeContainer onClick={handleCheckoutClick}>
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
        showModal={showModal}
        onClose={handleCloseModal}
      />
    </TodaysMenuMainContainer>
  );
};

export default TodaysMenu;
