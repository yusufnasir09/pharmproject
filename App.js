import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { PharmacyScreen } from './src/features/restaurants/screens/pharmacy.screen';
import { MapScreen } from './src/features/restaurants/screens/map.screen';
import { SettingsScreen } from './src/features/restaurants/screens/settings.screen';
import { LocationContextProvider } from './src/services/locations/location.context';
import { PharmaciesContextProvider } from './src/services/pharmacies/pharmacies.context';

const Tab = createBottomTabNavigator();

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
        <LocationContextProvider>
          <PharmaciesContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Tab.Screen
                  name="Pharmacies"
                  component={PharmacyScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="cart" color={color} size={size} />
                    ),
                  }} />
                <Tab.Screen
                  name="Map"
                  component={MapScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="map" color={color} size={size} />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Settings"
                  component={SettingsScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </PharmaciesContextProvider>
        </LocationContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>

    </>
  );
}


