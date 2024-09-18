import { View , Text, StyleSheet} from "react-native";

function GuessLogItem ({roundNumber, guess}){
    return(
        <View style={styles.listItems}>
            <Text>#{roundNumber}</Text>
            <Text style={styles.itemText}>opponent's Guess{guess}</Text>
        </View>
    )
};




export default GuessLogItem;


const styles = StyleSheet.create({
    listItems:{
        borderColor: '#53062C',
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        borderColor:'#ddb52f',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        textShadowOffset:{width:0, height:2},
        shadowRadius:3,
    },
    itemText:{
        fontFamily:'open-sans',

    }


});