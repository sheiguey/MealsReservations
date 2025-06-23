import { useContext } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { ScrollView, FlatList } from "react-native";
import { RestaurantList } from "../components/restaurant-list.component";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { SafArea } from "../../../components/utility/safe-area.component";
import { restaurantContext } from "../../../services/restaurants/restaurants.context";

const SearchBarContainer = styled.View`
  padding: 10px;
`;

const RestaurantListContainerView = styled(ScrollView)`
   flex:1;
   padding: 16px
`;


const RestaurantListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10
  }
})``;



export const RestaurantsScreen = () => {

  const { restaurants } = useContext(restaurantContext)
  return (
    <SafArea>
      <SearchBarContainer>
        <Searchbar type="bar" placeholder="Search" />
      </SearchBarContainer>
      <RestaurantListContainer
        data={restaurants}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />


      {/*   <RestaurantListContainerView>
        <RestaurantList />
      </RestaurantListContainerView> */}
    </SafArea>
  );
};
