import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RegisterPhoto from '../componentes/RegisterPhoto'
import ForgetPass from '../componentes/ForgetPass'
import Login from '../componentes/Login'
import Register from '../componentes/Register'
import AllMovements from '../componentes/AllMovements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import theme from '../theme';
import Dashboard from '../componentes/Dashboard';
import Profile from '../componentes/Profile';
import Market from '../componentes/Market';
import DebitCard from '../componentes/DebitCard';
import { StyleSheet } from 'react-native'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function DashboarTabdNav() {
    return (

        <Tab.Navigator
            initialRouteName="Dashboard"
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            })}
        >

            <Tab.Screen name="Dashboard" component={Dashboard} options={{
                tabBarIcon: ({ focused }) => {
                    return <Feather name="home" size={24}
                        color={focused ? theme.colors['primary-100'] : theme.colors['accent-200']} />
                }
            }}
            />

            <Tab.Screen name="Perfil" component={Profile} options={{
                tabBarIcon: ({ focused }) => {
                    return <Feather name="user" size={24}
                        color={focused ? theme.colors['primary-100'] : theme.colors['accent-200']} />
                }
            }}
            />

            <Tab.Screen name="Mercado" component={Market} options={{
                tabBarIcon: ({ focused }) => {
                    return <Feather name="trending-up" size={24}
                        color={focused ? theme.colors['primary-100'] : theme.colors['accent-200']} />
                }
            }}
            />

            <Tab.Screen name="Tarjeta" component={DebitCard} options={{
                tabBarIcon: ({ focused }) => {
                    return <Feather name="credit-card" size={24}
                        color={focused ? theme.colors['primary-100'] : theme.colors['accent-200']} />
                }
            }}
            />

        </Tab.Navigator>
    )
}







const InitStackNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="Login"
                component={Login} />

            <Stack.Screen
                name="Register"
                component={Register} />

            <Stack.Screen
                name="RegisterPhoto"
                component={RegisterPhoto} />

            <Stack.Screen
                name="ForgetPass"
                component={ForgetPass} />

            <Stack.Screen
                name="DashboarTabdNav"
                component={DashboarTabdNav} />

            <Stack.Screen
                name="AllMovements"
                component={AllMovements} />

        </Stack.Navigator>
    )
}

export default InitStackNav

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: theme.bgColors['bg-100'],
        borderTopColor: theme.colors['primary-100'],
        height: 50
    },

})