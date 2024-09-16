import {View, Text, StyleSheet} from 'react-native';





function NubmerContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}



export default NubmerContainer;




const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor: '#ddb52f',
        padding:24,
        margin:24,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',

    },
    numberText:{
        color:'#ddb52f',
        fontWeight:'bold'
    },
});