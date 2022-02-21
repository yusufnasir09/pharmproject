import React, { useContext } from "react";
import { View, Text, Button } from 'react-native';
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";




export const SettingsScreen = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
        <SafeArea>
            <View>
                <Text>Hi Setting</Text>
                <Button title="Logout" onPress={() => onLogout()} />
            </View>
        </SafeArea>
    )
}