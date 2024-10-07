import React from "react";
import {
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalHeading,
  ModalListItem,
  ModalListItemContainer,
  ModalItemName,
  ModalHorizontalLine,
  ModalItemDescriptionContainer,
  AppContainer,
  SlideUpPage,
  ModalItemPrice,
  PriceAndCountContainer,
  SpanElement,
  FoodType,
} from "./styledComponents";
import { GlobalButton } from "../AllYourFavorites/styledComponents";
import {
  CountContainer,
  MinusIcon,
  TodaysMenuFoodCountButton,
  PlusIcon,
} from "../TodaysMenuItem/styledComponents";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  cartItems: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    description: string;
  }[];
  totalPrice: number;
  isExiting: boolean;
  onAddItem: (item: {
    item_id: string;
    name: string;
    price: number;
    description: string;
  }) => void;
  onRemoveItem: (item: { id: string }) => void;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  onClose,
  isExiting,
  cartItems,
  totalPrice,
  onAddItem,
  onRemoveItem,
}) => {
  const slideUpVariants = {
    hidden: { y: "100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 2,
      transition: { duration: 0.45, ease: "easeInOut" },
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: { duration: 0.45, ease: "easeInOut" },
    },
  };

  const handleAddClick = (item: { item_id: string }) => {
    const fullItem = cartItems.find((i) => i.id === item.item_id);
    if (fullItem) {
      onAddItem({ item_id: fullItem.id, ...fullItem });
    }
  };

  const handleMinusClick = (item: { id: string; quantity: number }) => {
    if (item.quantity > 0) {
      onRemoveItem(item);
    }
  };

  return (
    <AppContainer>
      {showModal && (
        <SlideUpPage
          initial={isExiting ? "exit" : "hidden"}
          animate={isExiting ? "exit" : "visible"}
          exit="exit"
          variants={slideUpVariants}
        >
          <ModalHeader>
            <ModalCloseButton data-testid="close-button" onClick={onClose}>
              ×
            </ModalCloseButton>
            <ModalHeading>Selected Items</ModalHeading>
          </ModalHeader>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <ModalContent key={item.id}>
                <ModalListItem>
                  <ModalListItemContainer>
                    <FoodType src="/Images/nonveg.svg" />
                    <ModalItemDescriptionContainer>
                      <ModalItemName style={{ fontWeight: "500" }}>
                        {item.name}
                      </ModalItemName>
                      <ModalItemName style={{ fontSize: "14px" }}>
                        ₹{item.price}
                      </ModalItemName>
                    </ModalItemDescriptionContainer>
                  </ModalListItemContainer>

                  <PriceAndCountContainer>
                    <CountContainer
                      style={{ padding: "0px", borderRadius: "8px" }}
                    >
                      <TodaysMenuFoodCountButton
                        onClick={() => handleMinusClick(item)}
                      >
                        <MinusIcon
                          data-testid="minus-button"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.66675 4.00008H6.33341"
                            stroke="#CA8A04"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </MinusIcon>
                      </TodaysMenuFoodCountButton>
                      <SpanElement>{item.quantity}</SpanElement>
                      <TodaysMenuFoodCountButton
                        onClick={() => handleAddClick({ item_id: item.id })}
                      >
                        <PlusIcon
                          data-testid="plus-button"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.00008 1.66675V6.33341M1.66675 4.00008H6.33341"
                            stroke="#CA8A04"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </PlusIcon>
                      </TodaysMenuFoodCountButton>
                    </CountContainer>
                    <ModalItemPrice>
                      ₹ {item.price * item.quantity}
                    </ModalItemPrice>
                  </PriceAndCountContainer>
                </ModalListItem>
                <ModalHorizontalLine />
              </ModalContent>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
          <GlobalButton style={{ width: "90%" }}>
            Place Order: ₹{totalPrice}
          </GlobalButton>
        </SlideUpPage>
      )}
    </AppContainer>
  );
};

export default Modal;
