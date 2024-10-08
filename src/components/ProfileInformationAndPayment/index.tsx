import {
  PersonalInfoContainer,
  PersonalInfoItemContainer,
  PersonalInfoItemDescription,
  PersonalInfoItemHeading,
  PersonalInfoItemImage,
  PersonalInfoItemViewMoreButton,
  PersonalInfoTextContainer,
  PersonalInfoItemSubContainer,
  MoreContainer,
} from "./styledComponents";

import { HorizontalLine } from "../SignIn/styledComponents";
import { useNavigate } from "react-router-dom";

const ProfileInformationAndPayment = () => {
  const navigate = useNavigate();

  const handleClickProfileInfo = () => {
    navigate("/profileInfo");
  };

  const handleFeedback = () => {
    navigate("/Feedback");
  };

  return (
    <>
      <PersonalInfoContainer onClick={handleClickProfileInfo}>
        <PersonalInfoItemContainer>
          <PersonalInfoItemSubContainer>
            <PersonalInfoItemImage
              style={{ opacity: "0.64" }}
              src="/Images/profile1.svg"
            />
            <PersonalInfoTextContainer>
              <PersonalInfoItemHeading>
                Profile Infromation
              </PersonalInfoItemHeading>
              <PersonalInfoItemDescription>
                Change your account information
              </PersonalInfoItemDescription>
            </PersonalInfoTextContainer>
          </PersonalInfoItemSubContainer>
          <PersonalInfoItemViewMoreButton src="/Images/back.svg" />
        </PersonalInfoItemContainer>
        <HorizontalLine style={{ marginTop: "16px", opacity: "0.3" }} />
      </PersonalInfoContainer>

      <MoreContainer>
        <PersonalInfoItemContainer onClick={handleFeedback}>
          <PersonalInfoItemSubContainer>
            <PersonalInfoItemImage src="/Images/rating.svg" />
            <PersonalInfoTextContainer>
              <PersonalInfoItemHeading>Rate Us</PersonalInfoItemHeading>
              <PersonalInfoItemDescription>
                Rate us Here
              </PersonalInfoItemDescription>
            </PersonalInfoTextContainer>
          </PersonalInfoItemSubContainer>
          <PersonalInfoItemViewMoreButton src="/Images/back.svg" />
        </PersonalInfoItemContainer>
        <HorizontalLine style={{ marginTop: "16px", opacity: "0.3" }} />
      </MoreContainer>
    </>
  );
};

export default ProfileInformationAndPayment;
