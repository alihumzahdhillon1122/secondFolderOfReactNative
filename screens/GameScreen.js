import { StyleSheet, Text, View, Alert, FlatList } from 'react-native'
import Title from '../components/game/ui/Title';
import { useEffect, useState } from 'react';
import NubmerContainer from '../components/game/NumberConatiner';
import PrimaryButton from '../components/game/ui/PrimaryButton';
import Card from '../components/game/ui/Card';
import InstructionText from '../components/game/ui/InstructionText';
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogItem from '../components/game/ui/guessLogItem';
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundry = 1;
let maxBoundry = 100;
function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(minBoundry, maxBoundry, userNumber);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const [curresntGuess, setCurrentGuess] = useState(initialGuess);
    useEffect(() => {
        if (curresntGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [curresntGuess, userNumber, onGameOver]);
    useEffect(() => {
        minBoundry = 1;
        maxBoundry = 100;
    }, []);
    // function nextGuessHandler(direction) {
    //     if ((direction === 'lower' && curresntGuess < userNumber) ||
    //         (direction === 'greater' && curresntGuess > userNumber)) {
    //         Alert.alert(
    //             'Don’t lie!',
    //             'You know that this is wrong....',
    //             [{ text: 'Sorry!', style: 'cancel', }]
    //         );
    //         return;
    //     }
    //     if (direction === 'lower') {
    //         maxBoundry = curresntGuess;
    //     } else {
    //         minBoundry = curresntGuess + 1;
    //     }
    //     const newRndNumber = generateRandomBetween(minBoundry, maxBoundry, curresntGuess);
    //     setCurrentGuess(newRndNumber);
    //     setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    // }
    // function nextGuessHandler(direction) {
    //     // directin => 'lower', 'greater'
    //     if ((direction === 'lower' && curresntGuess < userNumber) ||
    //         (direction === 'greater' && curresntGuess > userNumber)) {
    //         Alert.alert(
    //             'Dont lie!',
    //             'you know that this is wrong....',
    //             [{ text: 'sorry!,', style: 'cancel', }]
    //         );
    //         return;
    //     }
    //     if (direction === 'lower') {
    //         maxBoundry = curresntGuess;
    //     } else {
    //         minBoundry = curresntGuess + 1;
    //     }
    //     const newRndNumber = generateRandomBetween(
    //         1,
    //         100,
    //         curresntGuess);
    //     setCurrentGuess(newRndNumber)
    //     setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    //     const guessRoundsListLength = guessRounds.length
    // };
    function nextGuessHandler(direction) {
        // 'lower' or 'greater'
        if (
            (direction === 'lower' && curresntGuess < userNumber) ||
            (direction === 'greater' && curresntGuess > userNumber)
        ) {
            Alert.alert(
                "Don't lie!",
                "You know that this is wrong...",
                [{ text: 'Sorry!', style: 'cancel' }]
            );
            return;
        }

        if (direction === 'lower') {
            maxBoundry = curresntGuess; // Update max boundary to current guess
        } else {
            minBoundry = curresntGuess + 1; // Update min boundary to current guess + 1
        }

        // Avoid the stack overflow issue by ensuring range is large enough
        if (maxBoundry - minBoundry <= 1) {
            Alert.alert("You broke the game!", "No more numbers to guess.");
            return;
        }

        const newRndNumber = generateRandomBetween(
            minBoundry, // Use updated minBoundry
            maxBoundry, // Use updated maxBoundry
            curresntGuess // Exclude the current guess
        );

        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length; // Move this here
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NubmerContainer>{curresntGuess}</NubmerContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>
                    Higher or lower
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onWhenPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove-circle" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onWhenPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-circle" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* <FlatList
                    data={guessRounds}
                    renderItem={({ item, index }) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - index}
                            guess={item}
                        />
                    )}
                    keyExtractor={(item) => item.toString()}
                /> */}
                <FlatList
                    data={guessRounds}
                    renderItem={({ item, index }) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - index}
                            guess={item}
                        />
                    )}
                    keyExtractor={(item, index) => `${item}-${index}`} // Combine item and index for a unique key
                />


            </View>
        </View>
    );
}
export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    InstructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
});









