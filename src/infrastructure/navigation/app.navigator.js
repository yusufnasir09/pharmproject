import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PharmaciesContextProvider } from "../../services/pharmacies/pharmacies.context";
import { LocationContextProvider } from "../../services/locations/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { MapScreen } from "../../features/map/screen/map.screen";
import { SettingsNavigator } from "./settings.navigator";
import { PharmaciesNavigator } from "./pharmacies.navigator";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return (
        <FavouritesContextProvider>
            <LocationContextProvider>
                <PharmaciesContextProvider>
                    <Tab.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Tab.Screen name="Pharmacy"
                            component={PharmaciesNavigator}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="cart" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen name="Map"
                            component={MapScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="map" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen name="Settings"
                            component={SettingsNavigator}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </PharmaciesContextProvider>
            </LocationContextProvider>
        </FavouritesContextProvider>

    )
}

