import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../theme'
import DebitCardComponent from './Reutilizables/DebitCardComponent'
import { Feather } from '@expo/vector-icons';
import PreseableMiniCard from './Reutilizables/PreseableMiniCard';

const data = [
    {
        icon: "bar-chart",
        text: "Analisis de movimientos"
    },

    {
        icon: "refresh-ccw",
        text: "Devoluciones recibidas"
    },
    {
        icon: "shopping-cart",
        text: "Comercios con descuento"
    }
]


const DebitCard = () => {
    const title = "Code:{W} Card"
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <DebitCardComponent cardNumber={3456} name="John Smith" date="01/23" cvv={123} />

            </View>
            <View >
                <FlatList
                    style={styles.listItems}
                    horizontal={true}
                    data={data}
                    renderItem={({ item }) =>
                        <PreseableMiniCard icon={item.icon} texto={item.text} />
                    }>
                </FlatList>
            </View>
        </View>
    )
}



export default DebitCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        gap: 30,
        backgroundColor: "#0E0D0D"
    },
    title: {
        color: theme.textColors['text-100'],
        fontSize: 20,
        fontFamily: 'UbuntuBold',
        paddingLeft: 20
    },
    listItems: {
        width: '100%',

    }

})