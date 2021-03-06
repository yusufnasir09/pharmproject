import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component"
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title } from "../components/account.style";




export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Pharm</Title>
            <AccountContainer>
                <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Register")}>
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
};