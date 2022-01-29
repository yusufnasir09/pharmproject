import React from "react";
import { StyleSheet, Text, Image, View } from 'react-native';
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg';
import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Card } from 'react-native-paper';

const PharmacyCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;
const PharmacyCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const Section = styled(View)`
flex-direction: row;
align-items: center;
`;
const Rating = styled(View)`
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
flex-direction: row;
`;
const SectionEnd = styled(View)`
flex: 1;
justify-content: flex-end;
flex-direction: row;
`;
const Info = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;
const Address = styled(Text)`
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props) => props.theme.fontSizes.body};
`;
const Title = styled(Text)`
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.body};
color: ${(props) => props.theme.colors.ui.primary};
`;

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
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="label" style={{ color: 'red', }}>CLOSED TEMORARILY</Text>
                        )}
                        <Spacer position="left" size="medium">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="medium">
                            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </PharmacyCard>
    );
};