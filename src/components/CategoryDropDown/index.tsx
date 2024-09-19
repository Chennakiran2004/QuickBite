// import { useState } from "react"
// import { CategoryDropDownHeading, CategoryDropDownImage, CategoryDropDownSubContainer, CategoryDrownDownMainContainer, MenuItemsList } from "./styledComponents"
// import TodaysMenuItem from "../TodaysMenuItem"
// const CategoryDropDown = () => {

//     const [showMenuItemsList, setShowMenuItemsList] = useState(false)

//     const toggleMenuItemsList = () => {
//         setShowMenuItemsList(!showMenuItemsList)
//     }

//     return (
//         <CategoryDrownDownMainContainer>
//             <CategoryDropDownSubContainer onClick={toggleMenuItemsList}>
//             <CategoryDropDownHeading>Reccomendations</CategoryDropDownHeading>
//             <CategoryDropDownImage isRotates={showMenuItemsList} src="/Images/back.svg"/>
//             </CategoryDropDownSubContainer>
//             <MenuItemsList isRotates={showMenuItemsList}>
//                 <>
//                     {showMenuItemsList && 
//                         <div>
//                             <TodaysMenuItem/>
//                             <TodaysMenuItem/>
//                             <TodaysMenuItem/>
//                             <TodaysMenuItem/>
//                         </div>
//                     }
//                 </>
//             </MenuItemsList>
//         </CategoryDrownDownMainContainer>
//     )
// }

// export default CategoryDropDown



import { useState } from "react"
import { CategoryDropDownHeading, CategoryDropDownImage, CategoryDropDownSubContainer, CategoryDrownDownMainContainer, MenuItemsList } from "./styledComponents"
import TodaysMenuItem from "../TodaysMenuItem"

interface CategoryDropDownProps {
    title: string;
    items: any[];
}

const CategoryDropDown = ({ title, items }: CategoryDropDownProps) => {
    const [showMenuItemsList, setShowMenuItemsList] = useState(false)

    const toggleMenuItemsList = () => {
        setShowMenuItemsList(!showMenuItemsList)
    }

    return (
        <CategoryDrownDownMainContainer>
            <CategoryDropDownSubContainer onClick={toggleMenuItemsList}>
                <CategoryDropDownHeading>{title}</CategoryDropDownHeading>
                <CategoryDropDownImage isRotates={showMenuItemsList} src="/Images/back.svg" />
            </CategoryDropDownSubContainer>
            <MenuItemsList isRotates={showMenuItemsList}>
                {showMenuItemsList && items.map((item, index) => (
                    <TodaysMenuItem key={index} item={item} />
                ))}
            </MenuItemsList>
        </CategoryDrownDownMainContainer>
    )
}

export default CategoryDropDown
