import styled from "styled-components";
import { gothicA1SemiBold } from "../../Constants/fontStyles";

export const AddItemContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AddItem = styled.p`
  ${gothicA1SemiBold}
  color: var(--Light-light-blue-600, #0284c7);
  text-align: center;
  font-family: "Yu Gothic UI";
  font-size: 16px;
  line-height: normal;
  letter-spacing: 0.14px;
  text-decoration-line: underline;
`;
