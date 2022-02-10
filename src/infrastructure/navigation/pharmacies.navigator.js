import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { PharmacyScreen } from "../../features/restaurants/screens/pharmacy.screen";
import { PharmacyDetails } from "../../features/restaurants/screens/pharmacy-details.screen";

const PharmacyStack = createStackNavigator();



export const PharmaciesNavigator = () => {
    return (
        <PharmacyStack.Navigator screenOptions={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
            headerShown: false,
        }}>
            <PharmacyStack.Screen name="Pharmacies" component={PharmacyScreen} />
            <PharmacyStack.Screen name="PharmacyDetails" component={PharmacyDetails} />
        </PharmacyStack.Navigator>
    )
}
