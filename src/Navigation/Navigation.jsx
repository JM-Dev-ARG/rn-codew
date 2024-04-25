import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import InitStackNav from './InitStackNav'



export default function Navigation() {
    const [log, setLog] = React.useState(false)

    return (
        <NavigationContainer>
            <InitStackNav />
        </NavigationContainer>

    )
}