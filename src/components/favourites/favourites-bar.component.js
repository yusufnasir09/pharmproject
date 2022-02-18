import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { CompactPharmacyInfo } from "../pharmacy/compact-pharmacy-info.component";

const FavouritesWrapper = styled(View)`
  padding: 20px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null;
    }
    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((pharmacy) => {
                    const key = pharmacy.name;
                    return (
                        <Spacer key={key} position="left" size="medium">
                            <TouchableOpacity
                                onPress={() =>
                                    onNavigate("PharmacyDetails", {
                                        pharmacy,
                                    })
                                }
                            >
                                <CompactPharmacyInfo pharmacy={pharmacy} />
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
};