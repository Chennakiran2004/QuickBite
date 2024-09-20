// import React from "react";
// import {
//     ModalBackground,
//     ModalContent,
//     ModalHeader,
//     ModalBody,
//     ModalCloseButton,
//     ModalFooter,
//     ModalOverlay,
//     ModalHeading,
//     ModalUnorderedList,
//     ModalListItem,
//     ModalListItemContainer,
//     ModalItemQuantity,
//     ModalItemName,
//     ModalItemPrice,
//     ModalHorizontalLine
// } from "./styledComponents";

// interface ModalProps {
//     showModal: boolean;
//     onClose: () => void;
//     cartItems: {
//         id: number;
//         name: string;
//         quantity: number;
//         price: number;
//     }[];
//     totalPrice: number;
// }

// const Modal: React.FC<ModalProps> = ({ showModal, onClose, cartItems, totalPrice }) => {
//     if (!showModal) return null;

//     return (
//         <>
//             <ModalOverlay onClick={onClose} />
//             <ModalBackground>
//                 <ModalContent>
//                     <ModalHeader>
//                         <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
//                         <ModalHeading>Selected Items</ModalHeading>
//                     </ModalHeader>
//                     <ModalBody>
//                         {cartItems.length === 0 ? (
//                             <p>No items selected.</p>
//                         ) : (
//                             <ModalUnorderedList>
//                                 {cartItems.map((item) => (
//                                     <ModalListItem key={item.id}>
//                                         <ModalListItemContainer>
//                                             <ModalItemQuantity>{item.quantity}</ModalItemQuantity>
//                                             <ModalItemName>{item.name}</ModalItemName>
//                                             <ModalItemPrice>{item.price * item.quantity}</ModalItemPrice>
//                                         </ModalListItemContainer>
//                                         <ModalHorizontalLine/>
//                                     </ModalListItem>
//                                 ))}
//                             </ModalUnorderedList>
//                         )}
//                     </ModalBody>
//                     <ModalFooter>
//                         <h3>Total Price: ₹{totalPrice}</h3>
//                     </ModalFooter>
//                 </ModalContent>
//             </ModalBackground>
//         </>
//     );
// };

// export default Modal;




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
    PlaceOrderButton
} from "./styledComponents";

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
    cartItems: {
        id: number;
        name: string;
        quantity: number;
        price: number;
        description: string
    }[];
    totalPrice: number;
}

const Modal: React.FC<ModalProps> = ({ showModal, onClose, cartItems, totalPrice }) => {
    if (!showModal) return null;

    return (
        <>
            <ModalOverlay onClick={onClose} />
            <ModalBackground>
                <ModalContent>
                    <ModalHeader>
                        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
                        <ModalHeading>Selected Items</ModalHeading>
                    </ModalHeader>
                    <ModalBody>
                        {cartItems.length === 0 ? (
                            <p>No items selected.</p>
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
                                            <ModalItemPrice>₹ {item.price * item.quantity}</ModalItemPrice>
                                        </ModalListItemContainer>
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
