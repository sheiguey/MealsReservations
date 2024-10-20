import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { RestaurantInfo } from "./restaurant-info.component";

const RestaurantListView = styled.View`
  flex: 1;
  backgroundcolor: green;
  padding: 10px;
`;

export const RestaurantList = () => {
  return (
    <RestaurantListView>
      <Text>restaurants list</Text>
      <RestaurantInfo />
      <RestaurantInfo />
      <RestaurantInfo />
      <RestaurantInfo />
      <RestaurantInfo />
      <RestaurantInfo />
    </RestaurantListView>
  );
};
