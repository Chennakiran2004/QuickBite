import { useNavigate } from "react-router-dom";
import HeadingComponent from "../HeadingComponent";

import {
  GlobalButton,
  AllYourFavoritesContainerDescription,
  AllYourFavoritesContainerHeading,
  AllYourFavoritesDescriptionContainer,
} from "../AllYourFavorites/styledComponents";

import {
  ChooseYourFoodImage,
  ChooseYourFoodMainContainer,
} from "./styledComponents";

const ChooseYourFood = () => {
  const navigate = useNavigate();

  const handleGetStartedButton = () => {
    navigate("/signIn");
    console.log("button clicked");
  };

  return (
    <ChooseYourFoodMainContainer data-testid="ChooseYourFoodContainer">
      <HeadingComponent />
      <ChooseYourFoodImage
        data-testid="ChooseYourFoodImage"
        src="/Images/ChooseYourFood.svg"
      />
      <AllYourFavoritesDescriptionContainer data-testid="description-container">
        <AllYourFavoritesContainerHeading data-testid="description-heading">
          Choose you food
        </AllYourFavoritesContainerHeading>
        <AllYourFavoritesContainerDescription data-testid="description">
          Easily find your type of food craving and you’ll get delivery in wide
          range.
        </AllYourFavoritesContainerDescription>
        <GlobalButton
          data-testid="get-started-button"
          onClick={handleGetStartedButton}
        >
          GET STARTED
        </GlobalButton>
      </AllYourFavoritesDescriptionContainer>
    </ChooseYourFoodMainContainer>
  );
};

export default ChooseYourFood;
