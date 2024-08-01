import { StyleSheet } from "react-native";

export const gray= "#D3D3D3";
export const black="#000000";
export const white = "#FFFFFF";
export const yellow= "#D6CB30";
export const lightYellow='#F0EED0';
export const red='#E22336';
export const systemColorButton="#075985";

export const bold='bold';
export const normal='normal';

export const normalText=14;
export const boldText=18;
export const smallText=10;

export const center= 'center';
export const left='left'
export const between='space-between'
export const around='space-around'
export const row='row'

export const flexProp=StyleSheet.create({
    flexCenterCenter:{
        justifyContent:center,
        alignItems:center
    },
    flexCenter:{
        flex:1,
        justifyContent:center
    },
    flexRow:{
        flexDirection: row,
        justifyContent:center
    },
    flexBetween:{
        justifyContent:between,
    },
    flexRowAround:{
       flexDirection:row,
       justifyContent:around,
    }
})

const touchableSystemOpacity = {
    ...flexProp.flexCenterCenter,
    height:50,
    borderRadius:50,
    marginTop:10,
    marginBottom:15,
    backgroundColor:systemColorButton,
    paddingHorizontal:20,
    color:white,
}


export const textColor = StyleSheet.create({
    textBlack:{
        color:black,
    },
    textGray:{
        color:gray,
    },
    textWhite:{
        color:white,
    },
    textRed:{
        color:red,
    }
})

export const backColor = StyleSheet.create({
    backBlack:{
        backgroundColor:black,
    },
    backYellow:{
        backgroundColor:yellow,
    },
    backGray:{
        backgroundColor:gray,
    },
    backLightYellow:{
        backgroundColor:lightYellow,
    }
})

export const textStyle = StyleSheet.create({
    textBold:{
        fontWeight:bold,
        fontSize:boldText,
    },
    textPlain:{
        fontWeight:normal,
        fontSize:normalText,
    },
    textSmall:{
        fontWeight:smallText,
    },
    textSmallError:{
        fontWeight:smallText,
        color:red,
    },
    textError:{
        fontWeight:normal,
        color:red,
    }
})

export const textAlign = StyleSheet.create({
    center:{
        textAlign:center,
    },
    left:{
        textAlign:left,
    }
})


export const styledComponents=StyleSheet.create({
    inputDefault:{
        borderBottomWidth: 2,
        borderBottomColor: gray
    },
    touchableSystemOpacity:{
       ...touchableSystemOpacity
    },
    touchableSystemLight:{
        ...touchableSystemOpacity,
        backgroundColor:gray,
        color:systemColorButton
    },
    textSystem:{
        fontSize:normalText,
        fontWeight:500,
        color:white,
    }
    
})