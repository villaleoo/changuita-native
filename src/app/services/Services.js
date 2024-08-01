import { View,Text } from "react-native"
import ServiceList from "../../components/containers/ServiceList"


export default function Services (){
    return(
        <View>
            <Text>Servicios disponibles: </Text>
            <ServiceList/>
        </View>
    )
}