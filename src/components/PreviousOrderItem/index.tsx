import React from "react";

import {
  OrderAgainContainer,
  OrderAgainText,
  PreviousOrderDate,
  PreviousOrderDetailsContainer,
  PreviousOrderDetailsTextContainer,
  PreviousOrderHorizontalLine,
  PreviousOrdersSubContainer,
  PreviousOrderStatus,
  PreviousOrderTotalPrice,
} from "./styledComponents";

const PreviousOrderItem: React.FC = () => {
  return (
    <PreviousOrdersSubContainer>
      <PreviousOrderDetailsContainer>
        <PreviousOrderDetailsTextContainer>
          <PreviousOrderStatus>Order Delivered</PreviousOrderStatus>
          <PreviousOrderDate>May 2, 2005</PreviousOrderDate>
        </PreviousOrderDetailsTextContainer>
        <PreviousOrderTotalPrice>₹ 395</PreviousOrderTotalPrice>
      </PreviousOrderDetailsContainer>
      <PreviousOrderHorizontalLine />
      <OrderAgainContainer>
        <OrderAgainText>Order Again</OrderAgainText>
      </OrderAgainContainer>
    </PreviousOrdersSubContainer>
  );
};

export default PreviousOrderItem;
