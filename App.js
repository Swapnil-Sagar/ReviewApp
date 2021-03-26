import React, { useState } from "react";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Navigator from "./routes/homeStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return <AppLoading />;
  }
}
