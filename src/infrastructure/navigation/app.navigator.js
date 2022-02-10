import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MapScreen } from "../../features/restaurants/screens/map.screen";
import { SettingsScreen } from "../../features/restaurants/screens/settings.screen";
import { PharmaciesNavigator } from "./pharmacies.navigator";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
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
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

