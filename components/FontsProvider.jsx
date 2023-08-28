import { useCallback } from "react";
import { useFonts } from "expo-font";
import { View } from "react-native";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const FontsProvider = ({ children, ...props }) => {
  const [fontsLoaded, fontError] = useFonts({
    ProductSansB: require("../assets/fonts/ProductSansBold.ttf"),
    ProductSansR: require("../assets/fonts/ProductSansRegular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <View {...props} onLayout={onLayoutRootView}>
      {children}
    </View>
  );
};

export default FontsProvider;
