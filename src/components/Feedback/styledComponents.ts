import styled from "styled-components";

export const FeedbackMainContainer = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 16px;
`;

export const FloatingLabelContainer = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-bottom: 2px solid #f8b64c;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    font-size: 12px;
    color: #f8b64c;
  }
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 16px;
  transition: all 0.3s ease;
  pointer-events: none;
`;
