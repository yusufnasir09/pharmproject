import React from "react";
import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg';
import { star, open } from "../../../../assets/star";
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

const PharmacyCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;
const PharmacyCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.secondary};
`;
const Section = styled(View)`
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
flex-direction: row;
`;

const Rating = styled(View)`
justify-content: flex-start;
`;
const Open = styled(View)`
justify-content: flex-end;
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
        icon,
        photos = [
            "https://www.pharmaccess.org/wp-content/uploads/2017/09/Julie-Harrison-Pharmacy-Day2017-8206.jpg",
        ],
        address = "20 streets nearby",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = pharmacy;
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <PharmacyCard elevation={5}>
            <PharmacyCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => <SvgXml xml={star} width={20} height={20} />)}
                    </Rating>
                    <Open>
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                    </Open>
                </Section>

                <Address>{address}</Address>
            </Info>
        </PharmacyCard>
    );
};