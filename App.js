import React, { Fragment } from "react";
import { StatusBar, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components";
import { restaurantProvider } from "./src/services/restaurants/restaurants.context";
import { theme } from "./src/infrastructure/theme";
import Ionicons from '@expo/vector-icons/Ionicons';

import { SafArea } from "./src/components/utility/safe-area.component";
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

export default function App() {

  const Tab = createBottomTabNavigator();

  const rootName = {
    restaurant: 'Restaurant',
    settings: 'Settings',
    map: 'Map'
  }

  const icons = {
    restaurant_icon: 'restaurant',
    restaurant_outline_icon: 'restaurant-outline',
    map_icon: 'map',
    map_outline_icon: 'map-outline',
    settings: 'settings',
    settings_outline_icon: 'settings-outline'
  }


  const tabIcon = (route) => ({ focused, color, size }) => {
    let iconName;

    if (route.name === rootName.restaurant) {
      iconName = focused
        ? icons.restaurant_icon
        : icons.restaurant_outline_icon;
    } else if (route.name === rootName.settings) {
      iconName = focused ? icons.settings : icons.settings_outline_icon;
    } else if (route.name === rootName.map) {
      iconName = focused ? icons.map_icon : icons.map_outline_icon;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }


  const screenOptions = ({ route }) => ({
    tabBarIcon: tabIcon(route),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  });


  const [oswaldFontsLoaded] = useOswaldFont({
    Oswald_400Regular,
  });

  const [latoFontsLoaded] = useLatoFont({
    Lato_400Regular,
  });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return null;
  }

  function Settings() {
    return <View><Text>Settings<Ionicons name="checkmark-circle" size={32} color="green" /></Text></View>
  }

  function Map() {
    return <View><Text>Map <Ionicons name="checkmark-circle" size={32} color="green" /></Text></View>
  }


  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />

      </Tab.Navigator>
    );
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <restaurantProvider>
          <NavigationContainer>
            <MyTabs />
          </NavigationContainer>
        </restaurantProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </Fragment>
  );
}
