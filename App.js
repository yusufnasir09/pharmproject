import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { LocationContextProvider } from './src/services/locations/location.context';
import { PharmaciesContextProvider } from './src/services/pharmacies/pharmacies.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { Navigation } from './src/infrastructure/navigation/index';


const firebaseConfig = {
  apiKey: "AIzaSyAPYMNLncS1PRQUhLHLNtUvcd2KLMFqdlA",
  authDomain: "pharmshop-5e513.firebaseapp.com",
  projectId: "pharmshop-5e513",
  storageBucket: "pharmshop-5e513.appspot.com",
  messagingSenderId: "189665770850",
  appId: "1:189665770850:web:085bebb370236bae98003b"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <PharmaciesContextProvider>
                <Navigation />
              </PharmaciesContextProvider>
            </LocationContextProvider>
            <ExpoStatusBar style="auto" />
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>

    </>
  );
}


