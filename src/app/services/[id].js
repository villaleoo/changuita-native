import react, { useState } from "react";
import { Link, useLocalSearchParams } from 'expo-router';
import { View, StyleSheet} from 'react-native';
import { useForm} from "react-hook-form";
import DateInput from "../../components/DateModal";
import StyledText from "../../components/customs/StyledText";
import { getHeightViewport } from "../../utils/utils";

export default function ServiceContract(){
    const {id} = useLocalSearchParams();
   
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
        console.log(`${date} desde ruta servicio[id]`);
    }
   

    return(
        <View style={styles.container}>
            <Link href="/"> volver</Link>
            <StyledText 
            text_xl 
            text_center 
            text_bold 
            children={`Contratar ${item[0].nombre}`} />

            <View style={styles.form}>
                <StyledText 
                text_black 
                text_m 
                marginBottom='5%'
                children={`Elegir fecha de inicio de trabajo`} />
                <View>
                    <DateInput handlerOnConfirmDate={handlerOnConfirmDate}/>           
                </View>
            </View>
     
        </View>
    )


}



const styles = StyleSheet.create({
    container:{
        height:getHeightViewport(50),
    },
    form:{
        marginTop:'5%',
        height:'100%',
      
    }
})

