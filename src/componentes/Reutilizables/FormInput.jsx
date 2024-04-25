import { StyleSheet, View } from 'react-native'
import React from 'react'
import theme from '../../theme'
import { TextInput } from 'react-native-paper'



const FormInput = ({ placeholder, setValueProp, mode, error, inputValue, type }) => {
    return (
        <View>
            <TextInput

                style={styles.input}
                mode='outlined'
                label={placeholder}
                onChangeText={setValueProp}
                selectionColor={theme.colors['accent-100']}
                activeOutlineColor={error ? 'red' : theme.colors['primary-200']}
                secureTextEntry={mode}
                textColor={theme.colors['primary-200']}
                outlineColor={theme.colors['accent-200']}
                value={inputValue}
                textContentType='none'
                inputMode={type}

            />


        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({

    input: {
        backgroundColor: theme.bgColors['bg-100'],
        width: '100%',
    },

})