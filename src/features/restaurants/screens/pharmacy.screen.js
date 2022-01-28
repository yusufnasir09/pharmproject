import React from "react";
import styled from "styled-components";
import { StyleSheet, StatusBar, SafeAreaView, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';


import { PharmacyInfoCard } from "../components/pharmacy-info-card.component";


const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
const SearchContainer = styled(View)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;
const ListContainer = styled(View)`
flex: 1;
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const PharmacyScreen = () => (

    <SafeArea>
        <SearchContainer><Searchbar /></SearchContainer>
        <ListContainer><PharmacyInfoCard /></ListContainer>
    </SafeArea>

)

