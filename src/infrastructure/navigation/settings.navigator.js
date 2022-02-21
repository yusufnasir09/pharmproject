import React, { useEffect } from "react";

import { createStackNavigator, CardStyleInterpolators, } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigatin }) => {
    return (
        <SettingsStack.Navigator screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
        </SettingsStack.Navigator>
    )
}