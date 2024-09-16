import TodaysMenuItem from "../TodaysMenuItem"
import { TodaysMenuHeading, TodaysMenuMainContainer } from "./styledComponents"

const TodaysMenu = () => {
    return(
        <TodaysMenuMainContainer>
            <TodaysMenuHeading>Today's Menu</TodaysMenuHeading>
            <TodaysMenuItem/>
        </TodaysMenuMainContainer>
    )
}

export default TodaysMenu