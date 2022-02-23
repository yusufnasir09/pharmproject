import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { Search } from "../component/search.component";
import { LocationContext } from "../../../services/locations/location.context";
import { PharmaciesContext } from "../../../services/pharmacies/pharmacies.context";
import { MapCallout } from "../component/map-callout.component";

const Map = styled(MapView)`
height: 100%;
width: 100%;
`;

export const MapScreen = ({ navigation }) => {
    const { location } = useContext(LocationContext);
    const { pharmacies } = useContext(PharmaciesContext);

    const [latDelta, setLatDelta] = useState(0);

    const { lat, lng, viewport } = location;


    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);
    return (
        <>
            <Search />
            <Map
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.01,
                }}>
                {pharmacies.map((pharmacy) => {
                    return (
                        <MapView.Marker
                            key={pharmacy.name}
                            title={pharmacy.name}
                            coordinate={{
                                latitude: pharmacy.geometry.location.lat,
                                longitude: pharmacy.geometry.location.lng,
                            }}
                        >
                            <MapView.Callout
                                onPress={() =>
                                    navigation.navigate("PharmacyDetails", {
                                        pharmacy,
                                    })
                                }>
                                <MapCallout pharmacy={pharmacy} />
                            </MapView.Callout>
                        </MapView.Marker>
                    );
                })}
            </Map>
        </>

    );
}