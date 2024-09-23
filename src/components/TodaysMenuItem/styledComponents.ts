import styled from "styled-components";
import {
  gothicA1Bold,
  gothicA1SemiBold,
  gothicA1Regular,
} from "../../Constants/fontStyles";

export const TodaysMenuItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 12%;
`;

export const TodaysMenuItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  text-align: start;
  width: 45%;
`;

export const TodaysMenuImage = styled.img`
  width: 24px;
  height: 24px;
  background: #d9d9d9;
`;

export const TodaysMenuItemDescriptionHeading = styled.h1`
  ${gothicA1SemiBold}
  color: #010f07;
  font-size: 16px;
  line-height: 24px; /* 150% */
  letter-spacing: -0.28px;
  align-self: stretch;
  margin: 0px;
`;

export const TodaysMenuItemPrice = styled.p`
  ${gothicA1Bold}
  color: #010f07;
  font-size: 14px;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.28px;
  align-self: stretch;
  margin: 0px;
`;

export const TodaysMenuItemDescription = styled.p`
  ${gothicA1Regular}
  color: var(--Light-blue-gray-600, #475569);
  font-size: 14px;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.28px;
  margin: 0px;
`;

export const TodaysMenuFoodImageContainer = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -24px;
  align-self: stretch;
`;

export const TodaysMenuFoodImage = styled.img`
  height: 160px;
  align-self: stretch;
  border-radius: 8px;
`;

export const TodaysMenuFoodAddButton = styled.button`
  ${gothicA1SemiBold}
  display: flex;
  padding: 8px 36px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid #eea734;
  background: var(--Light-yellow-50, #fefce8);
  position: relative;
  top: -10%;
  color: var(--Light-yellow-600, #ca8a04);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 20px;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
`;

export const PlusIcon = styled.svg`
  width: 8px;
  height: 8px;
  color: #ca8a04;
  position: relative;
  top: -36%;
  right: -36%;
`;

export const MinusIcon = styled.svg`
  width: 8px;
  height: 8px;
  color: #ca8a04;
  position: relative;
  top: -36%;
  right: -36%;
`;

export const TodaysMenuFoodCountButton = styled.button`
  background: none;
  border: none;
`;

export const CountContainer = styled.div`
  ${gothicA1SemiBold}
  display: flex;
  flex-direction: row;
  padding: 8px 24px;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid #eea734;
  background: var(--Light-yellow-50, #fefce8);
  position: relative;
  top: -10%;
  color: var(--Light-yellow-600, #ca8a04);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 20px;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
`;
