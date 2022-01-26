import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { PharmacyInfoCard } from "../components/pharmacy-info-card.component";

export const PharmacyScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.searchbar}>
            <Searchbar />
        </View>
        <View style={styles.lists}>
            <PharmacyInfoCard />
        </View>
    </SafeAreaView>
)




const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },
    searchbar: {
        padding: 20,
        backgroundColor: 'white'
    },
    lists: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    }
})
