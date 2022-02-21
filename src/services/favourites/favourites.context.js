import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);

    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
        } catch (e) {
            // saving error

        }
    };

    const loadFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`)
            if (value !== null) {
                setFavourites(JSON.parse(value))
            }
        } catch (e) {

        }
    }


    const add = (pharmacy) => {
        setFavourites([...favourites, pharmacy]);
    };
    const remove = (pharmacy) => {
        const newFavourites = favourites.filter((x) => (x.placeId !== pharmacy.placeId));
        setFavourites(newFavourites);
    };
    useEffect(() => {
        if (user && user.uid) {
            loadFavourites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        if (user && user.uid && favourites.length) {
            saveFavourites(favourites, user.uid);
        }
    }, [favourites, user])

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites: add, removeFromFavourites: remove, }}>{children}</FavouritesContext.Provider>
    )
}