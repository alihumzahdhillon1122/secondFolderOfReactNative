import { useState, useEffect } from 'react';
import React from 'react';
import { Text, StyleSheet, ImageBackground, SafeAreaView, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';    // expo-lapp-loading is deprecated so we r using splash screen
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';



import FirstStartGameScreen from './screens/FirstStartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans_400Regular_Italic.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
      }
    };

    prepare();
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <FirstStartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />     //  userNumber={userNumber}  first one is prop and secone one is our state
  };
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGameHandler} />
  }
  return (
    <>
      <StatusBar style='light' />
      <LinearGradient style={styles.rootScreen} colors={['#72063c', '#fff']}>
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
    </>
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
//  9;02 