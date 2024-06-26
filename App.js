import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import theme from './src/theme';
import Main from './src/Main';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Navigation from './src/Navigation/Navigation';
import { BottomTabBar } from '@react-navigation/bottom-tabs';


export default function App() {

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    'UbuntuBold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf')
  },
  );

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Navigation />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColors['bg-100'],
    marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight) : 0,
    backgroundColor: Platform.OS === 'android' ? (StatusBar.setBackgroundColor("#0E0D0D")) : "",
    color: Platform.OS === 'android' ? (StatusBar.setBarStyle("light-content", true)) : ""
  }
})