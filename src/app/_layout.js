import {Slot} from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Layout(){
    const insets = useSafeAreaInsets();
    const styles = StyleSheet.create({
        area:{
            paddingTop:insets.top,
            paddingBottom:insets.bottom
        }
    })

    return(
        <SafeAreaProvider>
            <View style={styles.area}>
                <Slot />
            </View>
        </SafeAreaProvider>
    )
}
