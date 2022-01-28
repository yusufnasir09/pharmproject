
import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { PharmacyScreen } from './src/features/restaurants/screens/pharmacy.screen';




export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <PharmacyScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>

    </>
  );
}


