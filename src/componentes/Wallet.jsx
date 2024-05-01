import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import theme from '../theme';
import Card from './Reutilizables/Card';
import InfoBalance from './Reutilizables/InfoBalance';

const Wallet = ({ visualize, userData, dolarValue }) => {

    return (
        <Card>
            <View style={styles.cardBtns}>
                <Text style={styles.balance}>Tu billetera</Text>
            </View>
            <View >
                <FlatList
                    style={styles.listItems}
                    keyExtractor={(item, index) => item + index}
                    data={userData.balance}
                    renderItem={({ item }) =>
                        <InfoBalance
                            component={"wallet"}
                            visualize={visualize}
                            amount={item.amount}
                            change={item.amount * dolarValue}
                            coin={item.coin}
                            type={item.type}
                            img={item.img} />}>

                </FlatList>
            </View>

        </Card>
    )
}

export default Wallet

const styles = StyleSheet.create({
    cardBtns: {
        width: '100%',
        flexDirection: 'row',
        alignSelf: "flex-start",
        paddingHorizontal: 10
    },
    balance: {
        fontSize: 15,
        fontFamily: 'UbuntuBold',
        color: theme.colors['accent-200']
    },

    listItems: {
        flexGrow: 0,
        width: "100%",
        paddingLeft: 20
    }
})