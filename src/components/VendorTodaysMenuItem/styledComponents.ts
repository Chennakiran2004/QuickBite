import styled from "styled-components";
import { gothicA1Medium } from "../../Constants/fontStyles";

// Button styles
export const EditButton = styled.button`
  ${gothicA1Medium}
  background-color: #f0ad4e;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #ec971f;
  }
`;

export const DeleteButton = styled.button`
  ${gothicA1Medium}
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c9302c;
  }
`;

export const SaveButton = styled.button`
  ${gothicA1Medium}
  background-color: #5cb85c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #4cae4c;
  }
`;

export const CancelButton = styled.button`
  ${gothicA1Medium}
  background-color: #f0ad4e;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ec971f;
  }
`;

export const AvailabilityCheckbox = styled.div`
  ${gothicA1Medium}
  margin: 10px 0;
  label {
    margin-left: 5px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
