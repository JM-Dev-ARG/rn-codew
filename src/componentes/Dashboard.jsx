import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import theme from '../theme'
import Card from './Reutilizables/Card'
import CardBalance from './CardBalance'
import HeaderDash from './HeaderDash'
import Movements from './Movements'

const Dashboard = ({ navigation }) => {
    const [visualize, setVisualize] = useState(true)
    const [openMenu, setOpenMenu] = useState(false)


    return (
        <View style={styles.container}>
            <HeaderDash userName={"Jorge"} setOpenMenu={setOpenMenu} openMenu={openMenu} />
            <CardBalance setVisualize={setVisualize} visualize={visualize} />
            <Movements visualize={visualize} navigator={navigation} />
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        gap: 30,
        backgroundColor: "#0E0D0D"
    },
})