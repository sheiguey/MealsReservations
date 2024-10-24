import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import start from "../../../../assets/start";
const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Adress = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://api.fd-squad.com/storage/images/shops/background/101-1726634737.webp",
    ],
    address = "Douala, Logpom 4eme Avenue",
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <SvgXml xml={start} width={20} height={20} />
        <Adress>{address}</Adress>
      </Info>
    </RestaurantCard>
  );
};
