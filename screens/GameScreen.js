import { StyleSheet, Text, View, Alert } from 'react-native'
import Title from '../components/game/ui/Title';
import { useEffect, useState } from 'react';
import NubmerContainer from '../components/game/NumberConatiner';
import PrimaryButton from '../components/game/ui/PrimaryButton';






function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum
    }
}



let minBoundry = 1;
let maxBoundry = 100;







function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomBetween(minBoundry, maxBoundry, userNumber);
    // const [minBoundry, setMinBoundry] = useState(1);
    // const [maxBoundry, setMaxBoundry] = useState(100);
    // const initialGuess = generateRandomBetween(1, 100, userNumber);



    const [curresntGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (curresntGuess === userNumber) {
            onGameOver();

        }
    }, [curresntGuess, userNumber, onGameOver]);


    function nextGuessHandler(direction) {
        // directin => 'lower', 'greater'
        if ((direction === 'lower' && curresntGuess < userNumber) ||
            (direction === 'greater' && curresntGuess > userNumber)) {
            Alert.alert(
                'Dont lie!',
                'you know that this is wrong....',
                [{ text: 'sorry!,', style: 'cancel', }]
            );
            return;
        }
        if (direction === 'lower') {
            maxBoundry = curresntGuess;
        } else {
            minBoundry = curresntGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
            1,
            100,
            curresntGuess);
        setCurrentGuess(newRndNumber)
    };





    return (

        <View style={styles.screen}>
            <Title>opponent's Guess</Title>
            <NubmerContainer>{curresntGuess}</NubmerContainer>
            <View>
                <Text>Hiegher or lower</Text>
                <View>
                    <PrimaryButton onWhenPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onWhenPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>

                {/* <View>LOG ROUNDS</View> */}
            </View>
        </View>

    );
};



export default GameScreen;












const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },


});