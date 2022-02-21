import React, { useContext, useState } from "react";
import { AccountBackground, AccountCover, AuthInput, AccountContainer, AuthButton, ErrorContainer, Title } from "../components/account.style";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";


export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    label="Email"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large" />
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
                {
                    error && (
                        <ErrorContainer size="large">
                            <Text variant="error">{error}</Text>
                        </ErrorContainer>
                    )
                }
                <Spacer size="large">
                    {
                        !isLoading ? (
                            <AuthButton icon="email" mode="contained" onPress={() => onLogin(email, password)}>
                                Login
                            </AuthButton>
                        ) : (
                            <ActivityIndicator animating={true} color={Colors.blue300} />
                        )
                    }
                </Spacer>
            </AccountContainer>
            <Spacer size="large">
                <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    )
};