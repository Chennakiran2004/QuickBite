import styled from "styled-components";
import { gothicA1SemiBold } from "../../Constants/fontStyles";

export const CategoryDrownDownMainContainer = styled.div`
  border-radius: 8px;
  background: #fff;
  padding: 8px;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.04);
  flex-shrink: 0;
`;

export const CategoryDropDownSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  margin: auto;
`;

export const CategoryDropDownHeading = styled.h1`
  ${gothicA1SemiBold}

  color: var(--Main-Color, #010f07);
  text-align: center;
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 16px;
  line-height: 32px; /* 200% */
  letter-spacing: 0.14px;
`;

export const CategoryDropDownImage = styled.img<{ isRotates: boolean }>`
  transform: ${({ isRotates }) =>
    isRotates ? "rotate(90deg)" : "rotate(-90deg)"};
  transition: transform 0.3s ease;
`;

export const MenuItemsList = styled.div<{ isRotates: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: ${({ isRotates }) => (isRotates ? "auto" : "0")};
  opacity: ${({ isRotates }) => (isRotates ? "1" : "0")};
  overflow: hidden;
  transition:
    max-height 0.5s ease-in,
    opacity 0.5s ease-in;
`;
