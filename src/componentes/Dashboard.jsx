import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CardBalance from './CardBalance'
import Wallet from './Wallet'
import HeaderDash from './HeaderDash'
import Movements from './Movements'
import data from '../data//MOCK_DATA.json'


const Dashboard = ({ navigation }) => {
    const userData = data[0]
    const [visualize, setVisualize] = useState(true)
    const [dolarValue, setDolarValue] = useState(1075)

    return (
        <View style={styles.container}>
            <HeaderDash userName={userData.nombre} imgAvatar={userData.avatar} />
            <CardBalance setVisualize={setVisualize} visualize={visualize} userData={userData} />
            <Wallet visualize={visualize} userData={userData} dolarValue={dolarValue} />
            <Movements visualize={visualize} navigator={navigation} data={userData.movements} />
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