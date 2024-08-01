import react,{useState} from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, StyleSheet,Pressable,TextInput,Platform, TouchableOpacity } from 'react-native';
import { formatDate } from "../utils/utils";
import { constants } from "../constants/constants";
import { styledComponents, flexProp, textColor} from "../constants/theme";


//componente para ingresar fechas. Por parametro recibe una funcion del padre para pasarle la fecha ingresada

export default function DateModal({handlerOnConfirmDate}){
    const [dateView,setDateView] = useState("")
    const [date,setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const toggleDatePicker = () =>{
        setShowPicker(!showPicker);
    };
 
    const onChange = ({type}, selectedDate) => {
        if(type == "set"){
            const currentDate=selectedDate;
            setDate(currentDate);
            
            if(Platform.OS === constants.platformANDROID ){
                setDateView(formatDate(date))
                toggleDatePicker();
                handlerOnConfirmDate(date);
            }
        }else{
            toggleDatePicker();
        }
        
    };

    const confirmIOSDate = () =>{
        setDateView(formatDate(date));
        toggleDatePicker();
        handlerOnConfirmDate(date);
    }
   
    return(
        <View>
            {showPicker && 
            (<RNDateTimePicker
            value={date}
            display="spinner"
            minimumDate={new Date()}
            onChange={onChange}
            locale="es-ES"
            />
            )}

            {showPicker && Platform.OS === constants.platformIOS && 
            (<View 
            style={flexProp.flexRowAround}>
                <TouchableOpacity 
                style={styledComponents.touchableSystemLight}
                onPress={toggleDatePicker}
                >
                    <Text>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styledComponents.touchableSystemOpacity}
                onPress={confirmIOSDate}
                >
                    <Text 
                    style={textColor.textWhite}>Confirmar</Text>
                </TouchableOpacity>
            </View>
            )}

            {!showPicker && 
            (<Pressable
            onPress={toggleDatePicker}
            >
                <TextInput
                style={styles.inputDate}
                placeholder={`Ej: ${formatDate(new Date())}`}
                value={dateView}
                editable={false}
                onPressIn={toggleDatePicker}
                />

            </Pressable>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    inputDate:{
        ...styledComponents.inputDefault,
        width:300, 
    }
})
