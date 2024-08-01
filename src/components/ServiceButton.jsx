import { Link } from "expo-router";
import react from "react";
import { Pressable, Text,StyleSheet, View } from "react-native";

export default function ServiceButton({ item, onPressHandler}) {
    const text = item.nombre;
    const firstLetter = text.charAt(0).toUpperCase();
    const restOfText = text.slice(1);
  
    return (
      <View style={styles.container}>
       
          <Pressable
            onPress={() => onPressHandler(item.id)}
            style={({ pressed }) => [
                styles.container,
                pressed ? styles.press : styles.default
              ]}
          >
             <Text style={styles.text}>
                <Text style={styles.firstLetter}>{firstLetter}</Text>
                {restOfText}
            </Text>
          </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
        margin: 3,
        height:50,
        justifyContent:'center',
        borderColor:'#41521F',
        borderWidth: 0, // Esto elimina el borde
        borderColor: 'transparent', // Esto asegura que no haya color de borde
        borderRadius: 0, // Esto asegura que no haya esquinas redondeadas
    },
    press:{
        backgroundColor:'#A44D40',
    },
    default:{
        backgroundColor:"#728944",
    },
    text:{
        textAlign:'center',
    }
})