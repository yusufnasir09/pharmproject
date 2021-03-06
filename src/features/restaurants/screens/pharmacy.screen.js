import React, { useContext, useState } from "react";
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { PharmacyInfoCard } from "../components/pharmacy-info-card.component";
import { PharmaciesContext } from "../../../services/pharmacies/pharmacies.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { PharmacyList } from "../components/pharmacy-list.styles";

export const PharmacyScreen = ({ navigation }) => {
    const { pharmacies, isloading } = useContext(PharmaciesContext);
    const { favourites } = useContext(FavouritesContext);

    const [isToggled, setIsToggled] = useState(false);

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

            <Search isFavouritesToggled={isToggled} onFavouritesToggle={() => setIsToggled(!isToggled)} />
            {isToggled && (
                <FavouritesBar
                    favourites={favourites}
                    onNavigate={navigation.navigate}
                />
            )}

            <PharmacyList
                data={pharmacies}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("PharmacyDetails", { pharmacy: item })}>
                            <Spacer position="bottom" size="large">
                                <FadeInView><PharmacyInfoCard pharmacy={item} /></FadeInView></Spacer>
                        </TouchableOpacity>

                    );
                }}
                keyExtractor={(item) => item.name}
            />

        </SafeArea>

    )
}

