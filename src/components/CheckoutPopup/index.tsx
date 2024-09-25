import {
  CheckoutImage,
  CheckoutPopupButtonContainer,
  CheckoutPopupMainContainer,
  CheckoutPopupTotalContainer,
  CheckoutText,
  ItemsCount,
  TotalItemsPrice,
  VerticalLine,
} from "./styledComponents";

interface checkoutPopupProps {
  totalPrice: number;
  totalItems: number;
}

const CheckoutPopup = ({ totalItems, totalPrice }: checkoutPopupProps) => {
  return (
    <CheckoutPopupMainContainer data-testid="CheckoutPopupMainContainer">
      <CheckoutPopupTotalContainer>
        <ItemsCount>{totalItems} Item</ItemsCount>
        <VerticalLine></VerticalLine>
        <TotalItemsPrice>₹ {totalPrice}</TotalItemsPrice>
      </CheckoutPopupTotalContainer>
      <CheckoutPopupButtonContainer>
        <CheckoutImage src="/Images/shopping-bag-02.svg" />
        <CheckoutText>Check Out</CheckoutText>
      </CheckoutPopupButtonContainer>
    </CheckoutPopupMainContainer>
  );
};

export default CheckoutPopup;
