import { Dimensions } from "react-native";

export const formatDate = (date)=>{
    return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }).format(date);
}

export const getHeightViewport = (vh) =>{
  const dim = vh/100;
  const windowHeight = Dimensions.get('window').height;
  return windowHeight * dim;

}