import styled from "styled-components";

export const TabBarContainerMainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const TabBarSubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #fff;
  box-shadow:
    0px 1px 0px 0px rgba(0, 0, 0, 0.1) inset,
    0px -2px 4px 0px rgba(0, 0, 0, 0.04);
`;

export const TabBarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

// export const TabBarItemImage = styled.svg<{isActive: boolean}>`
//   fill: ${({ isActive }) => (isActive ? '#EEA734' : '#868686')};
// `

export const TabBarItemImage = styled.svg.attrs<{ isActive: boolean }>({})<{
  isActive: boolean;
}>`
  fill: ${({ isActive }) => (isActive ? "#EEA734" : "#868686")};
`;

export const TabBarItemName = styled.p<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? "#EEA734" : "#868686")};
  text-align: center;
  font-family: "Yu Gothic UI";
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.1px;
  text-align: center;
`;

export const TabBarContainer1 = styled.div`
  display: flex;
  flex-direction: column;
`;
