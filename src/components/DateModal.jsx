import react,{useState} from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { View, Text, StyleSheet,Pressable,TextInput,Platform, TouchableOpacity } from 'react-native';
import { formatDate } from "../utils/utils";
import { constants } from "../constants/constants";
import { COMPONENTS_STYLES, DISPLAY_STYLES, TEXT_STYLES} from "../constants/theme";


//componente para ingresar fechas. Por parametro recibe una funcion del padre para hacerle llegar la fecha ingresada

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
            (<View 
            style={styles.prueba}>
                <RNDateTimePicker
                value={date}
                display="spinner"
                minimumDate={new Date()}
                onChange={onChange}
                locale="es-ES"
                style={styles.modal}
                />
                {Platform.OS === constants.platformIOS &&(
                    <View 
                    style={[DISPLAY_STYLES.f_row, DISPLAY_STYLES.j_around,styles.buttons]}>
                        <TouchableOpacity 
                        style={COMPONENTS_STYLES.touchableSystemLight}
                        onPress={toggleDatePicker}
                        >
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={COMPONENTS_STYLES.touchableSystemOpacity}
                        onPress={confirmIOSDate}
                        >
                            <Text 
                            style={TEXT_STYLES.text_white}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                
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
        ...COMPONENTS_STYLES.inputDefault,
        width:300, 
    },
    prueba:{
        height:'90%',
        width:'100%'
    },
    modal:{
        height:'70%'
    },
    buttons:{
        height:'30%'
    }
})
