import { Image, View } from 'react-native';
import styled from 'styled-components/native'
import { Card } from 'react-native-paper';



export const PharmacyCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
width: 95%;
align-self: center;
`;
export const PharmacyCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.secondary};
`;
export const Section = styled(View)`
flex-direction: row;
align-items: center;
`;
export const Rating = styled(View)`
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
flex-direction: row;
`;
export const SectionEnd = styled(View)`
flex: 1;
justify-content: flex-end;
flex-direction: row;
`;
export const Info = styled(View)`
padding: ${(props) => props.theme.space[3]};
`;
export const Icon = styled(Image)`
width: 15px;
height: 15px;
`;