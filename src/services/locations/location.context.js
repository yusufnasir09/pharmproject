import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();


export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState("san francisco");
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    };
    useEffect(() => {
        if (!keyword.length) {
            // don't do anything
            return;
        }
        locationRequest(keyword.toLowerCase()).then(locationTransform).then((result) => {
            setIsLoading(false);
            setLocation(result);
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
        });
    }, [keyword]);

    return (
        <LocationContext.Provider value={{ isloading, location, error, keyword, search: onSearch }}>{children}</LocationContext.Provider>
    )
}