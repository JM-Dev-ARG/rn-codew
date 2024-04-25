
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import theme from './src/components/theme';
import Main from './src/components/Main';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';


export default function App() {

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    'Fuzzy': require('./assets/fonts/FuzzyBubbles.ttf'),
    'Pixel': require('./assets/fonts/PixelifySans-VariableFont_wght.ttf'),
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf')
  },

  );

  console.log('Fonts loaded:', fontsLoaded);
  console.log('Font error:', fontError);

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
    backgroundColor: '#0E0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight) : 0,
    backgroundColor: Platform.OS === 'android' ? (StatusBar.setBackgroundColor('#0E0D0D')) : "",

  },




}
)
