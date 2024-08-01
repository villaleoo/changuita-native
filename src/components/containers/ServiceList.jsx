import react from "react";
import { FlatList, View } from "react-native";
import { useRouter } from "expo-router";
import ServiceButton from "../ServiceButton";

export default function ServiceList () {

    const router = useRouter();

    const data = [
        {nombre:"gasistas",
        tipo:'servicio',
        id:2}, 
        {nombre:"plomeros",
            tipo:'servicio',
        id:3},
        {nombre:"constructores",
            tipo:'servicio',
        id:4}, 
        {nombre:"fletes",
            tipo:'servicio',
        id:5}
        , 
        {nombre:"fletes",
            tipo:'servicio',
        id:6}
        , 
        {nombre:"fletes",
            tipo:'servicio',
        id:7}
        , 
        {nombre:"fletes",
            tipo:'servicio',
        id:8}
        , 
        {nombre:"fletes",
            tipo:'servicio',
        id:9}
        , 
        {nombre:"fletes",
            tipo:'servicio',
        id:59}
        

    
    ]
        
    const onPressHandler = (id) =>{
        router.push(`/services/${id}`);
    }
    
    return(
        <View>
            <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ServiceButton item={item} onPressHandler={onPressHandler}/>}
            >
                
            </FlatList>
               
           
        </View>
    )
}