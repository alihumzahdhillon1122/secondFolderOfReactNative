
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/game/ui/PrimaryButton'
import Title from '../components/game/ui/Title'










const FirstStartGameScreen = ({ onPickNumber }) => {




    const [enteredNumber, setEnteredNumber] = useState('')


    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }




    function resetInputHandler() {
        setEnteredNumber('');
    }



    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!',
                'number has to be a number between 1 & 99',
                [{ text: 'okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }








    return (
        <View style={styles.rootContainer}>
            <Title >Guess My Number</Title>
            <View style={styles.inputContainer}>
                <Text style={styles.instructionText}>Enter A Number</Text>
                <TextInput style={styles.numberInput} maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}

                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onWhenPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onWhenPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FirstStartGameScreen;













const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,   // android only property there is no equilent in ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    instructionText: {
        color: 'white',
        fontSize: 24,
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
});

// 11:40