import styled from "styled-components";
import { gothicA1Light, gothicA1SemiBold } from "../../Constants/fontStyles";

export const AddItemFormMainContainer = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
`;

export const AddItemFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`;

export const FormItemSubContainer = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const FormItemLabel = styled.label`
  ${gothicA1SemiBold}
  color: #010f07;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.28px;
`;

export const FormItemInput = styled.input`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  border: none;
  width: 100%;
  height: 40px;
  outline: none;
`;

export const FormItemImageInput = styled.input`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  height: 111px;
  border: none;
  outline: none;
  width: 100%;
`;

export const FormItemSelect = styled.select`
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  border: none;
  width: 100%;
  height: 48px;
  outline: none;
  padding-left: 16px;
`;

export const FormOptionElement = styled.option`
  ${gothicA1Light}
  color: var(--Light-blue-gray-400, #94A3B8);
  font-feature-settings:
    "liga" off,
    "clig" off;
  font-size: 12px;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.28px;
`;
