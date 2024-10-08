import styled from "styled-components";
import { gothicA1Light, gothicA1SemiBold } from "../../Constants/fontStyles";
import Select from "react-select"; // Import react-select to style it

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
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  border: none;
  width: 100%;
  height: 40px;
  outline: none;

  .react-select__control {
    border-radius: 8px;
    box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
    border: none;
    outline: none;
    padding: 0 12px;
    height: 40px;
    display: flex;
    align-items: center;
    background: var(--Active-Color---1, #eea734);

    &:hover {
      border: none;
      box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
    }
  }

  .react-select__menu {
    border-radius: 8px;
    box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  }

  .react-select__option {
    background-color: white;
    color: #010f07;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background: var(--Active-Color---1, #eea734);
    }

    &.react-select__option--is-focused {
      background: var(--Active-Color---1, #eea734);
    }
  }

  .react-select__single-value {
    color: #010f07; /* Selected value color */
  }

  .react-select__indicator {
    color: #010f07; /* Arrow color */
  }
`;

export const ImageInputElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`;

export const FileInputContainer = styled.div`
  width: 100%;
  height: 111px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: start;
  justify-content: start;
  position: relative;
  gap: 8px;
`;

export const FileText = styled.span`
  ${gothicA1Light}
  color: var(--Light-blue-gray-400, #94a3b8);

  font-size: 12px;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.28px;
  padding-left: 16px;
`;

export const UploadIcon = styled.div`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  margin-right: 8px;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
