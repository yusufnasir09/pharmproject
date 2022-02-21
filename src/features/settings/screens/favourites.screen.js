import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { PharmacyList } from "../../restaurants/components/pharmacy-list.styles";
import { PharmacyInfoCard } from "../../restaurants/components/pharmacy-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
align-items: center;
justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {

    const { favourites } = useContext(FavouritesContext)

    return favourites.length ? (
        <SafeArea>
            <PharmacyList
                data={favourites}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("PharmacyDetails", { pharmacy: item })}>
                            <Spacer position="bottom" size="large"><PharmacyInfoCard pharmacy={item} /></Spacer>
                        </TouchableOpacity>

                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text center>No favourites yet</Text>
        </NoFavouritesArea>
    )
}