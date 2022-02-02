import React, { useContext } from "react";
import styled from "styled-components";
import { View, FlatList } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { PharmacyInfoCard } from "../components/pharmacy-info-card.component";
import { PharmaciesContext } from "../../../services/pharmacies/pharmacies.context";

const SearchContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;
const PharmacyList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

export const PharmacyScreen = () => {
    const { pharmacies, isloading, error } = useContext(PharmaciesContext);

    return (
        <SafeArea>
            {isloading && (
                <View style={{ position: "absolute", top: "50%", left: "50%" }}>
                    <ActivityIndicator
                        animating={true}
                        style={{ marginLeft: -25 }}
                        size={50} color={Colors.red800} />
                </View>
            )}

            <SearchContainer><Searchbar /></SearchContainer>

            <PharmacyList
                data={pharmacies}
                renderItem={({ item }) => {
                    return (
                        <Spacer position="bottom" size="large"><PharmacyInfoCard pharmacy={item} /></Spacer>
                    );
                }}
                keyExtractor={(item) => item.name}
            />

        </SafeArea>

    )
}

