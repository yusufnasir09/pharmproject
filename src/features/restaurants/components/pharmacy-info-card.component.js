import React from "react";
import { SvgXml } from 'react-native-svg';
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { PharmacyCard, PharmacyCardCover, Section, SectionEnd, Rating, Info, Icon } from "./pharmacy-info-card.styles";
import { Favourite } from "../../../components/favourites/favourites.component";
import { View } from "react-native";

export const PharmacyInfoCard = ({ pharmacy }) => {
    const ratingArray = Array.from(new Array(Math.floor(pharmacy.rating)));
    return (
        <PharmacyCard elevation={5}>
            <View>
                <Favourite pharmacy={pharmacy} />
                <PharmacyCardCover key={pharmacy.name} source={{ uri: pharmacy.photos[0] }} />
            </View>
            <Info>
                <Text variant="label">{pharmacy.name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_, i) => (
                            <SvgXml
                                key={`star-${pharmacy.placeId}-${i}`}
                                xml={star}
                                width={20}
                                height={20}
                            />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {pharmacy.isClosedTemporarily && (
                            <Text variant="label" style={{ color: 'red', }}><Text variant="error">{pharmacy.businessStatus}</Text></Text>
                        )}
                        <Spacer position="left" size="medium">
                            {pharmacy.isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="medium">
                            <Icon source={{ uri: pharmacy.icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Text variant="body">{pharmacy.vicinity}</Text>
            </Info>
        </PharmacyCard>
    );
};