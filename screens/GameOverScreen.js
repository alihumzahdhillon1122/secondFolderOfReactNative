import { Text, View, Image, StyleSheet } from 'react-native';
import Title from '../components/game/ui/Title';
import PrimaryButton from '../components/game/ui/PrimaryButton';



function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootConatiner}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success3Image.jpg')} />
            </View>
            <View>
                <Text style={styles.summaryText}>
                    Your Phone Needed 
                    <Text style={styles.highlight}> {roundsNumber} </Text>
                    rounds to guess the Number 
                    <Text style={styles.highlight}> {userNumber} </Text>
                </Text>
                <PrimaryButton onWhenPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    )
};
export default GameOverScreen;

const styles = StyleSheet.create({
    rootConatiner: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        wieth: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 3,
        borderColor: 'white',
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: 250,
        height: 250,
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize:24,
        textAlign:'center',
        marginVertical:24,

    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: '#3b021f',
    }

});