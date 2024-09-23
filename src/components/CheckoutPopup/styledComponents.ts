import styled from "styled-components";
import { gothicA1Bold, gothicA1SemiBold } from "../../Constants/fontStyles";

export const CheckoutPopupMainContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  background: #eea734;
`;

export const CheckoutPopupTotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ItemsCount = styled.p`
  ${gothicA1SemiBold}
  color: #fff;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  line-height: 24px;
`;

export const VerticalLine = styled.div`
  background: #fff;
  width: 1px;
  height: 16px;
`;

export const TotalItemsPrice = styled.p`
  ${gothicA1SemiBold}

  color: #fff;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  line-height: 24px; /* 150% */
  letter-spacing: -0.28px;
`;

export const CheckoutPopupButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckoutImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const CheckoutText = styled.p`
  ${gothicA1Bold}
  color: #fff;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  line-height: 24px; /* 150% */
  letter-spacing: -0.28px;
`;
