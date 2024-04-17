import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import theme from './src/theme';
import Main from './src/Main';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';


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
      <Main style={styles.main} />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bgColors['bg-100'],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight) & (StatusBar.setBackgroundColor(theme.bgColors['bg-100'])) : 0,
    backgroundColor: Platform.OS === 'android' ? (StatusBar.setBackgroundColor(theme.bgColors['bg-100'])) : "",
  }
})