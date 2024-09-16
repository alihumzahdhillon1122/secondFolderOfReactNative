import { Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import React from 'react';
import { useState } from 'react';
import FirstStartGameScreen from './screens/FirstStartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }
  let screen = <FirstStartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />     //  userNumber={userNumber}  first one is prop and secone one is our state
  };
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }



  return (
    <LinearGradient style={styles.rootScreen} colors={['#333', '#fff']}>
      <ImageBackground
        source={require('./assets/images/image.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15
  },
});
