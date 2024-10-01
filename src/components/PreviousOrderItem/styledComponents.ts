import styled from "styled-components";

import { gothicA1SemiBold, gothicA1Regular } from "../../Constants/fontStyles";

export const PreviousOrdersSubContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.04);
  margin: auto;
  margin-top: 24px;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
`;

export const PreviousOrderDetailsContainer = styled.div`
  width: 94%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: #fff;
  flex-shrink: 0;
  margin: auto;
`;

export const PreviousOrderDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

export const PreviousOrderStatus = styled.h3`
  ${gothicA1SemiBold}
  color: #010f07;
  font-size: 16px;
  line-height: 24px; /* 150% */
  letter-spacing: -0.28px;
  align-self: stretch;
  margin: 0px;
`;

export const PreviousOrderDate = styled.p`
  ${gothicA1Regular}
  color: var(--Light-blue-gray-600, #475569);
  font-size: 14px;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.28px;
  margin: 0px;
`;

export const PreviousOrderTotalPrice = styled.p`
  ${gothicA1SemiBold}
  color: #010f07;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.28px;
  align-self: stretch;
  margin: 0px;
  align-self: end;
`;

export const PreviousOrderHorizontalLine = styled.hr`
  width: 100%;
  background: #f3f2f2;
  opacity: 0.3;
`;

export const OrderAgainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 8px;
`;

export const OrderAgainText = styled.p`
  ${gothicA1SemiBold}
  color: var(--Active-Color---1, #EEA734);
  margin: 0px;
`;

export const PreviousOrdersImageContainer = styled.div`
  width: 94%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #fff;
  flex-shrink: 0;
  margin: auto;
  gap: 8px;
  padding: 8px;
  background-color: #fafafa;
`;

export const PreviousOrdersImages = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;
