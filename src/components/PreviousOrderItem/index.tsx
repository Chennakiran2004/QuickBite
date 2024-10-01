import React from "react";

import {
  PreviousOrderDate,
  PreviousOrderDetailsContainer,
  PreviousOrderDetailsTextContainer,
  PreviousOrderHorizontalLine,
  PreviousOrdersImageContainer,
  PreviousOrdersImages,
  PreviousOrdersSubContainer,
  PreviousOrderStatus,
  PreviousOrderTotalPrice,
} from "./styledComponents";

const PreviousOrderItem: React.FC = () => {
  return (
    <PreviousOrdersSubContainer>
      <PreviousOrdersImageContainer>
        <PreviousOrdersImages alt="food" src="/Images/Food1.svg" />
        <PreviousOrdersImages alt="food" src="/Images/Food1.svg" />
      </PreviousOrdersImageContainer>
      <PreviousOrderHorizontalLine />
      <PreviousOrderDetailsContainer>
        <PreviousOrderDetailsTextContainer>
          <PreviousOrderStatus>Order Delivered</PreviousOrderStatus>
          <PreviousOrderDate>Placed at 8th Jan 2024, 19:11pm</PreviousOrderDate>
        </PreviousOrderDetailsTextContainer>
        <PreviousOrderTotalPrice>₹ 395 {">"} </PreviousOrderTotalPrice>
      </PreviousOrderDetailsContainer>
    </PreviousOrdersSubContainer>
  );
};

export default PreviousOrderItem;
