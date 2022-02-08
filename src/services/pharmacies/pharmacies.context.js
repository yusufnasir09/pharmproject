import React, { useState, useEffect, useMemo, createContext, useContext } from "react";
import { LocationContext } from "../locations/location.context";

import { pharmaciesRequest, pharmaciesTransform } from "./pharmacies.service";

export const PharmaciesContext = createContext();

export const PharmaciesContextProvider = ({ children }) => {
    const [pharmacies, setPharmacies] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrievePharmacies = (loc) => {
        setIsLoading(true);
        setPharmacies([]);

        setTimeout(() => {
            pharmaciesRequest(loc).then(pharmaciesTransform).then((results) => {
                setIsLoading(false);
                setPharmacies(results);
            }).catch((err) => {
                setIsLoading(false);
                setError(err);
            });
        }, 2000);
    };
    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrievePharmacies(locationString);
        }
    }, [location]);

    return (
        <PharmaciesContext.Provider value={{ pharmacies, isloading, error }}>{children}</PharmaciesContext.Provider>
    )
};