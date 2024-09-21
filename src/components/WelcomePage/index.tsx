import HeadingComponent from "../HeadingComponent";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  MainContainer,
  CarouselFirstImage,
  DescriptionContainer,
  DescriptionHeading,
  DescriptionText,
} from "./styledComponents";
import { GlobalButton } from "../AllYourFavorites/styledComponents";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStartedButton = () => {
    navigate("/signIn");
  };

  return (
    <MainContainer data-testid="welcomePage-main-container">
      <BackgroundImage src="/Images/Circle Background.jpg" />
      <HeadingComponent />
      <CarouselFirstImage src="/Images/welcomePage.svg" />
      <DescriptionContainer>
        <DescriptionHeading>Welcome</DescriptionHeading>
        <DescriptionText>
          It’s a pleasure to meet you. We are excited that you’re here so let’s
          get started!
        </DescriptionText>
        <GlobalButton onClick={handleGetStartedButton}>
          GET STARTED
        </GlobalButton>
      </DescriptionContainer>
    </MainContainer>
  );
};

export default WelcomePage;
