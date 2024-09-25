import React from "react";
import {
  ModalBackground,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  ModalHeading,
  ModalUnorderedList,
  ModalListItem,
  ModalListItemContainer,
  ModalItemQuantity,
  ModalItemName,
  ModalItemPrice,
  ModalHorizontalLine,
  ModalItemDescriptionContainer,
  PlaceOrderButton,
} from "./styledComponents";

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
  cartItems: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    description: string;
  }[];
  totalPrice: number;
}

const Modal: React.FC<ModalProps> = ({
  showModal,
  onClose,
  cartItems,
  totalPrice,
}) => {
  if (!showModal) return null;

  return (
    <>
      <ModalOverlay data-testid="modal-overlay" onClick={onClose} />
      <ModalBackground data-testid="modal-container">
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton data-testid="close-button" onClick={onClose}>
              ×
            </ModalCloseButton>
            <ModalHeading>Selected Items</ModalHeading>
          </ModalHeader>
          <ModalBody>
            {cartItems.length === 0 ? (
              <p data-testid="no-items-selected">No items selected.</p>
            ) : (
              <ModalUnorderedList>
                {cartItems.map((item) => (
                  <>
                    <ModalListItem key={item.id}>
                      <ModalListItemContainer>
                        <ModalItemQuantity>{item.quantity}</ModalItemQuantity>
                        <ModalItemDescriptionContainer>
                          <ModalItemName>{item.name}</ModalItemName>
                          <ModalItemName>{item.description}</ModalItemName>
                        </ModalItemDescriptionContainer>
                      </ModalListItemContainer>
                      <ModalItemPrice>
                        ₹ {item.price * item.quantity}
                      </ModalItemPrice>
                    </ModalListItem>
                    <ModalHorizontalLine />
                  </>
                ))}
              </ModalUnorderedList>
            )}
          </ModalBody>
          <ModalFooter>
            <PlaceOrderButton>Place Order: ₹{totalPrice}</PlaceOrderButton>
          </ModalFooter>
        </ModalContent>
      </ModalBackground>
    </>
  );
};

export default Modal;
