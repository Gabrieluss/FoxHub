import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CadastroScreen from "./components/CadastroScreen";
import LoginScreen from "./components/LoginScreen";

const Stack = createNativeStackNavigator()

export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Cadastro" component={CadastroScreen} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{
                        headerTitle:"",
                        headerTransparent:100
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

