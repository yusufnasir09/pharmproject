import React, { useState, useEffect, useMemo, createContext } from "react";

import { pharmaciesRequest, pharmaciesTransform } from "./pharmacies.service";

export const PharmaciesContext = createContext();

export const PharmaciesContextProvider = ({ children }) => {
    const [pharmacies, setPharmacies] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const retrievePharmacies = () => {
        setIsLoading(true);
        setTimeout(() => {
            pharmaciesRequest().then(pharmaciesTransform).then((results) => {
                setIsLoading(false);
                setPharmacies(results);
            }).catch((err) => {
                setIsLoading(false);
                setError(err);
            });
        }, 2000);
    };
    useEffect(() => {
        retrievePharmacies();
    }, []);

    return (
        <PharmaciesContext.Provider value={{ pharmacies, isloading, error }}>{children}</PharmaciesContext.Provider>
    )
};