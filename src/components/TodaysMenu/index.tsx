import { useState } from "react";
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

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const TodaysMenu = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    {
      title: "Recommendations",
      items: [
        {
          id: 1,
          name: "The Halal Guys",
          price: 10,
          description: "Choice of Lorem Ipsum",
          image: "/Images/Food1.svg",
        },
        {
          id: 2,
          name: "Biryani Bliss",
          price: 10,
          description: "Delicious Biryani",
          image: "/Images/Food1.svg",
        },
        {
          id: 3,
          name: "The Halal Guys",
          price: 10,
          description: "Choice of Lorem Ipsum",
          image: "/Images/Food1.svg",
        },
      ],
    },
    {
      title: "Popular",
      items: [
        {
          id: 4,
          name: "Pizza Palace",
          price: 10,
          description: "Cheesy goodness",
          image: "/Images/Food1.svg",
        },
        {
          id: 5,
          name: "Burger Bonanza",
          price: 10,
          description: "Juicy burgers",
          image: "/Images/Food1.svg",
        },
        {
          id: 6,
          name: "Burger Bonanza",
          price: 10,
          description: "Juicy burgers",
          image: "/Images/Food1.svg",
        },
      ],
    },
    {
      title: "Popular",
      items: [
        {
          id: 7,
          name: "Pizza Palace",
          price: 10,
          description: "Cheesy goodness",
          image: "/Images/Food1.svg",
        },
        {
          id: 8,
          name: "Burger Bonanza",
          price: 10,
          description: "Juicy burgers",
          image: "/Images/Food1.svg",
        },
        {
          id: 9,
          name: "Burger Bonanza",
          price: 10,
          description: "Juicy burgers",
          image: "/Images/Food1.svg",
        },
      ],
    },
    {
      title: "Popular",
      items: [
        {
          id: 10,
          name: "Pizza Palace",
          price: 10,
          description: "Cheesy goodness",
          image: "/Images/Food1.svg",
        },
        {
          id: 11,
          name: "Burger Bonanza",
          price: 10,
          description: "Juicy burgers",
          image: "/Images/Food1.svg",
        },
        {
          id: 12,
          name: "Burger Bonanza",
          price: 10,
          description: "Juicy burgers",
          image: "/Images/Food1.svg",
        },
      ],
    },
    {
      title: "Popular",
      items: [
        {
          id: 13,
          name: "Pizza Palace",
          price: 10,
          description: "Cheesy goodness",
          image: "/Images/Food1.svg",
        },
        {
          id: 14,
          name: "Burger Bonanza",
          price: 10,
          description: "Juicy burgers",
          image: "/Images/Food1.svg",
        },
        {
          id: 15,
          name: "Burger Bonanza",
          price: 10,
          description: "Juicy burgers",
          image: "/Images/Food1.svg",
        },
      ],
    },
  ];

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart.filter((cartItem) => cartItem.id !== item.id);
    });
  };

  const getItemQuantity = (item: MenuItem) => {
    const cartItem = cart.find((cartItem) => cartItem.id === item.id);
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
          {categories.map((category, index) => (
            <CategoryDropDown
              key={index}
              title={category.title}
              items={category.items}
              onAddItem={addToCart}
              onRemoveItem={removeFromCart}
              getItemQuantity={getItemQuantity}
            />
          ))}
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
        cartItems={cart}
        totalPrice={getTotalPrice()}
        showModal={showModal}
        onClose={handleCloseModal}
      />
    </TodaysMenuMainContainer>
  );
};

export default TodaysMenu;
