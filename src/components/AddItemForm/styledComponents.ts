import styled from "styled-components";
import { gothicA1SemiBold } from "../../Constants/fontStyles";

export const AddItemFormMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  gap: 24px;
`;

export const AddItemFormElement = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const InputLabel = styled.label`
  ${gothicA1SemiBold}
  color: #010f07;
  font-size: 16px;
  font-style: normal;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.28px;
`;

export const InputElement = styled.input`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  border: none;
  width: 100%;
  height: 40px;
  outline: none;
  padding: 0;
`;

export const SelectElement = styled.select`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  border: none;
  width: 100%;
  height: 40px;
  outline: none;
  padding-left: 12px;
  appearance: none;
  cursor: pointer;
  border-width: 0;
`;
