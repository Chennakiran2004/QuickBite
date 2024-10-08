import { useState } from "react";

import {
  FeedbackMainContainer,
  FloatingLabelContainer,
  StyledInput,
  StyledLabel,
} from "./styledComponents";
import {
  BackImage,
  SignInDescription,
  SignInHeading,
  SignInTextContainer,
} from "../SignIn/styledComponents";
import { useNavigate } from "react-router-dom";
import { GlobalButton } from "../AllYourFavorites/styledComponents";

const Feedback = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/profile");
  };

  return (
    <>
      <FeedbackMainContainer>
        <BackImage
          data-testid="backImage"
          onClick={handleBack}
          src="/Images/back.svg"
          style={{ paddingLeft: "16px" }}
        />
        <SignInTextContainer style={{ paddingTop: "16px" }}>
          <SignInHeading>Send Feedback</SignInHeading>
          <SignInDescription>
            Tell us what you love about the app, or what we could be doing
            better.
          </SignInDescription>
        </SignInTextContainer>
        <FloatingLabelContainer>
          <StyledInput
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            placeholder=" "
          />
          <StyledLabel>Enter Feedback</StyledLabel>
        </FloatingLabelContainer>

        <GlobalButton>submit feedback</GlobalButton>
      </FeedbackMainContainer>
    </>
  );
};

export default Feedback;
