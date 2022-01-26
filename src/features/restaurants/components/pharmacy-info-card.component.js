import React from "react";
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';

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

    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Text style={styles.title}>{name}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
    title: { padding: 16 },
});
