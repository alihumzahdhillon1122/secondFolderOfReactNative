import { useState } from 'react';
import React from 'react';
import { Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



import FirstStartGameScreen from './screens/FirstStartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)


  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans_400Regular_Italic.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

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
    //  9;02