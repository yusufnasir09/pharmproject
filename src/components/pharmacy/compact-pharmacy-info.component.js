import React from "react";
import styled from "styled-components";
import { Platform } from "react-native";
import WebView from "react-native-webview"
import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;


const isAndroid = Platform.OS === "android";

export const CompactPharmacyInfo = ({ pharmacy, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: pharmacy.photos[0] }} />
      <Spacer />
      <Text center variant="caption" numberOfLines={3}>
        {pharmacy.name}
      </Text>
    </Item>
  );
};