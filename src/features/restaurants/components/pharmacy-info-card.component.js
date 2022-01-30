import React from "react";
import { SvgXml } from 'react-native-svg';
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { PharmacyCard, PharmacyCardCover, Section, SectionEnd, Rating, Info, Icon } from "./pharmacy-info-card.styles";


export const PharmacyInfoCard = ({ pharmacy = {} }) => {
    const {
        name = 'Some Pharmacy',
        icon = "https://maps.gstatic.com/mapfiles/ms2/micons/hospitals.png",
        photos = [
            "https://www.pharmaccess.org/wp-content/uploads/2017/09/Julie-Harrison-Pharmacy-Day2017-8206.jpg",
        ],
        address = "20 streets nearby",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = pharmacy;
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <PharmacyCard elevation={5}>
            <PharmacyCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="label" style={{ color: 'red', }}><Text variant="error">CLOSED TEMORARILY</Text></Text>
                        )}
                        <Spacer position="left" size="medium">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="medium">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Text variant="body">{address}</Text>
            </Info>
        </PharmacyCard>
    );
};