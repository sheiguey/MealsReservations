import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { SafeAreaView } from "react-native";
import { RestaurantList } from "../components/restaurant-list.component";

const SafArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchBarContainer = styled.View`
  justify-content: center;
  padding: 10px;
`;

export const RestaurantsScreen = () => {
  return (
    <SafArea>
      <SearchBarContainer>
        <Searchbar type="bar" placeholder="Search" />
      </SearchBarContainer>
      <RestaurantList />
    </SafArea>
  );
};
