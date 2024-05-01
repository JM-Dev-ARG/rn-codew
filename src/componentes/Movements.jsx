import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Reutilizables/Card'
import theme from '../theme'
import MovementItem from './Reutilizables/MovementItem'
import { Feather } from '@expo/vector-icons';



const Movements = ({ visualize, navigator, data }) => {
    const filteredData = data.slice(0, 3);

    return (
        <Card>
            <Text style={styles.title}>Ultimos Movimimientos</Text>
            <View>
                <FlatList style={styles.listItems}
                    data={filteredData}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) =>

                        <MovementItem
                            item={item}
                            visualize={visualize}
                            img={item.img}
                            type={item.type}
                            date={item.date}
                            ammount={item.ammount}
                        />
                    }
                />
            </View>
            <Pressable onPress={() => { navigator.navigate("AllMovements") }} style={styles.button}>
                <Text style={styles.verTodos}>Ver todos</Text>
                <Feather name="arrow-right" size={24} color={theme.colors['accent-100']} />
            </Pressable>
        </Card>
    )
}

export default Movements

const styles = StyleSheet.create({
    title: {
        fontFamily: "Ubuntu",
        color: theme.colors['accent-200'],
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "flex-start",
        paddingHorizontal: 10
    },
    listItems: {
        flexGrow: 0
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.bgColors['bg-100'],
        padding: 10,
        borderRadius: 10,
        width: "90%",
        alignSelf: "flex-center",
        marginRight: 10
    },
    verTodos: {
        fontFamily: "Ubuntu",
        color: theme.colors['accent-100'],
    }
})