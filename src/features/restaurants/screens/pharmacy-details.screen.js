import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { PharmacyInfoCard } from "../components/pharmacy-info-card.component";

export const PharmacyDetails = ({ route }) => {

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

    const { pharmacy } = route.params;
    return (
        <SafeArea>
            <PharmacyInfoCard pharmacy={pharmacy} />
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={(props) => <List.Icon {...props} icon="bread-slice" />}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}>
                    <List.Item title="First item" />
                    <Divider />
                    <List.Item title="Second item" />
                </List.Accordion>
                <Divider />
                <List.Accordion
                    title="Lunch"
                    left={(props) => <List.Icon {...props} icon="hamburger" />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}>
                    <List.Item title="First item" />
                    <Divider />
                    <List.Item title="Second item" />
                </List.Accordion>
                <Divider />
                <List.Accordion
                    title="Dinner"
                    left={(props) => <List.Icon {...props} icon="food-variant" />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}>
                    <List.Item title="First item" />
                    <Divider />
                    <List.Item title="Second item" />
                </List.Accordion>
                <Divider />
                <List.Accordion
                    title="Drinks"
                    left={(props) => <List.Icon {...props} icon="cup" />}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}>
                    <List.Item title="First item" />
                    <Divider />
                    <List.Item title="Second item" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>

    )
};