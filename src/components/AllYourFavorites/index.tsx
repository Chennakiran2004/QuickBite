
import HeadingComponent from "../HeadingComponent";
import {AllYourFavoritesContainer, GlobalButton, AllYourFavoritesContainerDescription, AllYourFavoritesContainerHeading, AllYourFavoritesDescriptionContainer, AllYourFavoritesImage } from "./styledComponents";
const AllYourFavorites = () => {

    return (
        <AllYourFavoritesContainer>
            <div>
                <HeadingComponent/>
                <AllYourFavoritesImage src="/Images/AllYourFavorites.svg"/>
            </div>
            <AllYourFavoritesDescriptionContainer>
                <AllYourFavoritesContainerHeading>All Your Favorites</AllYourFavoritesContainerHeading>
                <AllYourFavoritesContainerDescription>Order from the best local restaurants with easy, on-demand delivery.</AllYourFavoritesContainerDescription>
                <GlobalButton>GET STARTED</GlobalButton>
            </AllYourFavoritesDescriptionContainer>
        </AllYourFavoritesContainer>
    );
}

export default AllYourFavorites