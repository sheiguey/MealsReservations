import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import start from "../../../../assets/start";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { Section, Adress, Info, Rating, RestaurantCard, RestaurantCardCover, SectionEnd } from "./restaurant-info-styles.component";



export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://api.fd-squad.com/storage/images/shops/background/101-1726634737.webp",
    ],
    address = "Douala, Logpom 4eme Avenue",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const Icon = styled.Image`
     width:15px;
     height:15px;
  `

  const ratingArray = Array.from(new Array(rating));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {
              ratingArray.map((index) => (
                <SvgXml key={index} xml={start} width={15} height={15} />
              ))
            }
          </Rating>
          <SectionEnd>
            {
              isClosedTemporarily && (
                <Text variant="error">
                  CLOSED TEMPORARILY
                </Text>
              )
            }

            <Spacer position='left' size='large'>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position='left' size='large'>
              {icon && <Icon source={{ uri: icon }} />}
            </Spacer>


          </SectionEnd>
        </Section>
        <Adress>{address}</Adress>
      </Info>
    </RestaurantCard>
  );
};
