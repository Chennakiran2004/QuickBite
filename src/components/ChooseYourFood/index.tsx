import { GlobalButton, AllYourFavoritesContainerDescription, AllYourFavoritesContainerHeading, AllYourFavoritesDescriptionContainer } from "../AllYourFavorites/styledComponents"
import HeadingComponent from "../HeadingComponent"
import { ChooseYourFoodImage, ChooseYourFoodMainContainer } from "./styledComponents"


const ChooseYourFood = () => {
    return(
        <ChooseYourFoodMainContainer>
            <HeadingComponent/>
            <ChooseYourFoodImage src="/Images/ChooseYourFood.svg"/>
            <AllYourFavoritesDescriptionContainer>
                <AllYourFavoritesContainerHeading>Choose you food</AllYourFavoritesContainerHeading>
                <AllYourFavoritesContainerDescription>Easily find your type of food craving and you’ll get delivery in wide range.</AllYourFavoritesContainerDescription>
                <GlobalButton>GET STARTED</GlobalButton>
            </AllYourFavoritesDescriptionContainer>
        </ChooseYourFoodMainContainer>
    )
}

export default ChooseYourFood