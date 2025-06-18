import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { SafeAreaView, ScrollView, StatusBar, FlatList } from "react-native";
import { RestaurantList } from "../components/restaurant-list.component";
import { RestaurantInfo } from "../components/restaurant-info.component";

const SafArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop:${StatusBar.currentHeight}`} 
`;

const SearchBarContainer = styled.View`
  padding: 10px;
`;

const RestaurantListContainerView = styled(ScrollView)`
   flex:1;
   padding: 16px
`;


const RestaurantListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;



export const RestaurantsScreen = () => {
  return (
    <SafArea>
      <SearchBarContainer>
        <Searchbar type="bar" placeholder="Search" />
      </SearchBarContainer>
      <RestaurantListContainer
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />


      {/*   <RestaurantListContainerView>
        <RestaurantList />
      </RestaurantListContainerView> */}
    </SafArea>
  );
};
