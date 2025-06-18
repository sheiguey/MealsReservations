import React, { Fragment } from "react";
import { StatusBar, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFont,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldFontsLoaded] = useOswaldFont({
    Oswald_400Regular,
  });

  const [latoFontsLoaded] = useLatoFont({
    Lato_400Regular,
  });

  if (!oswaldFontsLoaded || !latoFontsLoaded) {
    return null;
  }

  function HomeScreen() {
    return <View><Text>Home</Text></View>
  }

  const Tab = createBottomTabNavigator()



  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </Fragment>
  );
}
