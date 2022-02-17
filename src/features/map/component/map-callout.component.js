import React from "react";
import styled from "styled-components";
import { CompactPharmacyInfo } from "../../../components/pharmacy/compact-pharmacy-info.component";

const MyText = styled.Text`

`;


export const MapCallout = ({ pharmacy }) => (
    <CompactPharmacyInfo
        pharmacy={pharmacy}
    />
);