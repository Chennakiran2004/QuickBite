import HeadingComponent from "../HeadingComponent";
import { useNavigate } from "react-router-dom";
import {
  AllYourFavoritesContainer,
  GlobalButton,
  AllYourFavoritesContainerDescription,
  AllYourFavoritesContainerHeading,
  AllYourFavoritesDescriptionContainer,
  AllYourFavoritesImage,
} from "./styledComponents";

const AllYourFavorites = () => {
  const navigate = useNavigate();

  const handleGetStartedButton = () => {
    navigate("/signIn");
    console.log("button clicked");
  };

  return (
    <AllYourFavoritesContainer data-testid="AllYourFavoritesContainer">
      <div>
        <HeadingComponent />
        <AllYourFavoritesImage
          data-testid="AllYourFavoritesImage"
          src="/Images/AllYourFavorites.svg"
        />
      </div>
      <AllYourFavoritesDescriptionContainer data-testid="description-container">
        <AllYourFavoritesContainerHeading data-testid="description-heading">
          All Your Favorites
        </AllYourFavoritesContainerHeading>
        <AllYourFavoritesContainerDescription data-testid="description">
          Order from the best local restaurants with easy, on-demand delivery.
        </AllYourFavoritesContainerDescription>
        <GlobalButton
          data-testid="get-started-button"
          onClick={handleGetStartedButton}
        >
          GET STARTED
        </GlobalButton>
      </AllYourFavoritesDescriptionContainer>
    </AllYourFavoritesContainer>
  );
};

export default AllYourFavorites;
