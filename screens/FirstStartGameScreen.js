
import { View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/game/ui/PrimaryButton'
import Title from '../components/game/ui/Title'
import Card from '../components/game/ui/Card'
import instructionText from '../components/game/ui/InstructionText'
import InstructionText from '../components/game/ui/InstructionText'
const FirstStartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('')
    const { width, height } = useWindowDimensions();

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
    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title >Guess My Number</Title>
                    <Card>
                        <InstructionText>
                            Enter A Number
                        </InstructionText>
                        <TextInput style={styles.numberInput} maxLength={2}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            value={enteredNumber} />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onWhenPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onWhenPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
export default FirstStartGameScreen;
// const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
        justifyContent: 'center'
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