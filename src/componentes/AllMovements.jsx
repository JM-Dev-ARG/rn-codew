import { useNavigation } from '@react-navigation/native'

import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../theme';
import { Feather } from '@expo/vector-icons';
import data from '../data/MovementsDataMock.json'
import MovementItem from './Reutilizables/MovementItem';

const AllMovements = ({ visualize }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => { navigation.goBack() }}>
                    <Feather name="arrow-left" size={24} color={theme.textColors['text-200']} />
                </Pressable>
                <Text style={styles.title}>Todos los Movimientos</Text>
            </View>
            <View style={styles.listItems}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) =>

                        <MovementItem
                            item={item}
                            visualize={true}
                            img={item.img}
                            type={item.type}
                            date={item.date}
                            ammount={item.ammount}
                        />
                    }
                />
            </View>

        </View>
    )
}

export default AllMovements

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        alignContent: 'center',

        backgroundColor: "#0E0D0D"
    },
    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        height: 50,

    },
    title: {
        fontFamily: "Ubuntu",
        fontSize: 20,
        color: theme.textColors['text-200'],
        alignItems: 'center'
    },
    listItems: {
        width: "90%",
        alignSelf: "center",
    }
})