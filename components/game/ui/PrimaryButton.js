import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

















const PrimaryButton = ({ children, onWhenPress}) => {                      // here is onWhenPress is a prop
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={onWhenPress}
                style={({pressed}) => pressed ? [styles.buttonInnercontainer , pressed] : styles.buttonInnercontainer  } // this function we are adding for ios riiple effect
                android_ripple={{ color: '#72063c'  }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;
























const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 20,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnercontainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',   
    },
    pressed:{
        opacity:0.75
    }
});
