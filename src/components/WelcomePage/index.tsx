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
      <BackgroundImage
        data-testid="welcomePage-background-image"
        src="/Images/Circle Background.jpg"
      />
      <HeadingComponent />
      <CarouselFirstImage
        data-testid="welcomePage-carousel-image"
        src="/Images/welcomePage.svg"
      />
      <DescriptionContainer>
        <DescriptionHeading>Welcome</DescriptionHeading>
        <DescriptionText>
          It’s a pleasure to meet you. We are excited that you’re here so let’s
          get started!
        </DescriptionText>
        <GlobalButton
          data-testid="get-started-button"
          onClick={handleGetStartedButton}
        >
          GET STARTED
        </GlobalButton>
      </DescriptionContainer>
    </MainContainer>
  );
};

export default WelcomePage;
