import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const add = (pharmacy) => {
        setFavourites([...favourites, pharmacy]);
    };
    const remove = (pharmacy) => {
        const newFavourites = favourites.filter((x) => (x.placeId !== pharmacy.placeId));
        setFavourites(newFavourites);
    }

    return (
        <FavouritesContext.Provider value={{ favourites, addToFavourites: add, removeFromFavourites: remove, }}>{children}</FavouritesContext.Provider>
    )
}