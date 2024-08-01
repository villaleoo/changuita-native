import react, { useState } from "react";
import { Link, useLocalSearchParams } from 'expo-router';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useForm} from "react-hook-form";
import DateInput from "../../components/DateModal";
import StyledText from "../../components/customs/StyledText";
import { getHeightViewport } from "../../utils/utils";

export default function ServiceContract(){
    const {id} = useLocalSearchParams();
    ///poder ingresar (para hoy mismo/o para mañana) o para una fecha en particular
    
    const {control, handleSubmit, formState:{errors},}=useForm({
        defaultValues:{
            date:new Date()
        }
    })

    const onSubmit=(data) => console.log(data);
    

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
    
    const item = data.filter((e) => e.id == id )

    const handlerOnConfirmDate =(date)=>{
        console.log(`${date} papaaaaaaaaaaaa`);
    }
   

    return(
        <View style={styles.container}>
           <Link href="/"> volver</Link>
           <StyledText big bold black center p_1 m_b_5 >Contratar {`${item[0].nombre}`}</StyledText> 
           <StyledText
           children={`Elegir fecha de inicio de trabajo`}
           black
           />
           <View>
                <DateInput handlerOnConfirmDate={handlerOnConfirmDate}/>           
           </View>
     
        </View>
    )


}



const styles = StyleSheet.create({
    container:{
        justifyContent:'space-around',
        height:getHeightViewport(30),
    }
})

