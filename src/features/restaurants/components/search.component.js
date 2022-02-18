import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";



const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword])

    return (
        <SearchContainer><Searchbar
            icon={isFavouritesToggled ? "heart" : "heart-outline"}
            onIconPress={onFavouritesToggle}
            placeholder="Search for a Pharmacy"
            value={searchKeyword}
            onSubmitEditing={() => {
                search(searchKeyword);
            }}
            onChangeText={(text) => {
                setSearchKeyword(text);
            }}
        /></SearchContainer>
    )
}
