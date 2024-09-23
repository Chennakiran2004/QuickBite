import PreviousOrderItem from "../PreviousOrderItem";
import TabBar from "../TabBar";

import { TabBarContainer } from "../TodaysMenu/styledComponents";
import {
  PreviousOrdersHeading,
  PreviousOrdersMainContainer,
} from "./styledCompnents";

const PreviousOrders = () => {
  return (
    <PreviousOrdersMainContainer>
      <PreviousOrdersHeading>Orders</PreviousOrdersHeading>
      <PreviousOrderItem />
      <PreviousOrderItem />
      <PreviousOrderItem />
      <PreviousOrderItem />
      <TabBarContainer>
        <TabBar />
      </TabBarContainer>
    </PreviousOrdersMainContainer>
  );
};

export default PreviousOrders;
