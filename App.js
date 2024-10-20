import React, { Fragment } from "react";
import { StatusBar } from "react-native";
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

  if (!oswaldFontsLoaded || latoFontsLoaded) {
    return null;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>

      <StatusBar style="auto" />
    </Fragment>
  );
}
