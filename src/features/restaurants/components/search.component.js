import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/locations/location.context";



const SearchContainer = styled.View`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        search(searchKeyword);
    }, []);

    return (
        <SearchContainer><Searchbar
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
