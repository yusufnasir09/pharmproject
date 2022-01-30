import React from "react";
import { render } from "react-dom";
import { View, Text } from 'react-native';
import { SafeArea } from "../../../components/utility/safe-area.component";


export const MapScreen = () => {
    return (
        <SafeArea>
            <View>
                <Text>Hi Map</Text>
            </View>
        </SafeArea>
    )
}