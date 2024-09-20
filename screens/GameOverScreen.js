import { Text, View, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Title from '../components/game/ui/Title';
import PrimaryButton from '../components/game/ui/PrimaryButton';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();
    let imageSize = 250;
    if (width < 380) {
        imageSize = 150;
    };
    if (height < 400) {
        imageSize = 80;
    };
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootConatiner}>
                <Title>Game Over</Title>
                <View style={[styles.imageContainer, imageStyle]}>
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
        </ScrollView>
    )
};
export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    rootConatiner: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // wieth: deviceWidth < 380 ? 150 : 250,
        // height: deviceWidth < 380 ? 150 : 250,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: 'white',
        overflow: 'hidden',
        margin: 25,
    },
    image: {
        width: 250,
        height: 250,
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,

    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: '#3b021f',
    }

});