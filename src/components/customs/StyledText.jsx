import react from "react";
import { StyleSheet, Text } from "react-native";


const styles = StyleSheet.create({
    black:{
        color:'black'
    },
    bold:{
        fontWeight:'bold'
    },
    blue:{
        color:'blue'
    },
    big:{
        fontSize:18,
    },
    small:{
        fontSize:10
    },
    medium:{
        fontSize:14
    },
    error:{
        color:'red',
    },
    center:{
        textAlign:'center'
    },
    

})


export default function StyledText({children, ...props}){
    const textStyles= Object.keys(props).map((prop) => styles[prop]);

    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}