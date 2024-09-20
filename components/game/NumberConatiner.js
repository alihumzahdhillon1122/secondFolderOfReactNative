import { View, Text, StyleSheet, Dimensions } from 'react-native';
function NubmerContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NubmerContainer;
const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#ddb52f',
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380  ? 12 : 24,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: '#ddb52f',
        fontSize: deviceWidth < 380 ? 28 : 36,
        // fontWeight: 'bold'
        fontFamily: 'open-sans-bold',
    },
});