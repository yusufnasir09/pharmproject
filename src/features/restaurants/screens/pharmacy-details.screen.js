import React from "react";
import { View, Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { PharmacyInfoCard } from "../components/pharmacy-info-card.component";

export const PharmacyDetails = ({ route }) => {
    const { pharmacy } = route.params;
    return (
        <SafeArea>
            <PharmacyInfoCard pharmacy={pharmacy} />
        </SafeArea>

    )
};