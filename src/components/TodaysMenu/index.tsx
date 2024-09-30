import { useEffect, useState } from "react";
import CategoryDropDown from "../CategoryDropDown";
import CheckoutPopup from "../CheckoutPopup";
import TabBar from "../TabBar";
import {
  TodaysMenuHeading,
  TodaysMenuMainContainer,
  TabBarContainer,
  TodaysMenuSubContainer,
  CategoryDropDownListContainer,
  CheckOutPopupHomeContainer,
} from "./styledComponents";
import Modal from "../Modal";
import axios from "axios";
import { fetchApi } from "../../utils/fetchApi";

interface MenuItem {
  item_id: string;
  name: string;
  price: number;
  description: string;
  item_image_url: string;
}

interface Category {
  category_id: string;
  name: string;
  items: MenuItem[];
}

interface CartItem extends MenuItem {
  quantity: number;
}

const TodaysMenu = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get(`${fetchApi}qb_order/get/categories/`) // Change to 127.0.0.1
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.item_id === item.item_id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item_id === item.item_id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.item_id === item.item_id
      );
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.item_id === item.item_id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart.filter((cartItem) => cartItem.item_id !== item.item_id);
    });
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
                onAddItem={addToCart}
                onRemoveItem={removeFromCart}
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
