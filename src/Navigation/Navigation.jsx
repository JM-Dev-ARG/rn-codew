import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../componentes/Login'
import Register from '../componentes/Register'
import { NavigationContainer } from '@react-navigation/native'
import RegisterPhoto from '../componentes/RegisterPhoto'
/* import Main from '../Main' */

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="RegisterPhoto" component={RegisterPhoto} />
            </Stack.Navigator>

        </NavigationContainer>

    )
}