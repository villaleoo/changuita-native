import { StyleSheet } from "react-native";

const palette= {
    gray:'#D3D3D3',
    black:'#000000',
    white:'#ffffff',

    primary:'#ffc300',
    light:'#ffd95c',
    dark:'#A37D00',

    error:'#E22336',
    system:'#075985',

}

const textSize= {
    s:10,
    m:15,
    xl:18
}

const display= {
    between:'space-between',
    around:'space-around',
    evenly:'space-evenly',
    row:'row'
}

const spaces= {
    s:'2%',
    m:'5%',
    l:'10%'
}



//falta sizing (dimensiones height,width,viewport ....)

//engorroso hacer paddings y demas spacing de esta manera
export const SPACE_STYLES = StyleSheet.create({
    mt_s:{
        marginTop:spaces.s
    },
    mt_m:{
        marginTop:spaces.m
    },
    mt_l:{
        marginTop:spaces.l
    },
    mb_s:{
        marginBottom:spaces.s
    },
    mb_m:{
        marginBottom:spaces.m
    },
    mb_l:{
        marginBottom:spaces.l
    },
    ml_s:{
        marginLeft:spaces.s
    },
    ml_m:{
        marginLeft:spaces.m
    },
    ml_l:{
        marginLeft:spaces.l
    },
    mr_s:{
        marginRight:spaces.s
    },
    mr_m:{
        marginRight:spaces.m
    },
    mr_l:{
        marginRight:spaces.l
    },
    mx:{
        marginHorizontal:spaces.s
    },
    my:{
        marginVertical:spaces.s
    }
})


export const DISPLAY_STYLES=StyleSheet.create({
    d_center:{
        alignItems:'center',
        justifyContent:'center',
    },
    f_row:{
        flexDirection: display.row,
    },
    j_center:{
        justifyContent:'center',
    },
    j_between:{
        justifyContent:display.between,
    },
    j_around:{
        justifyContent:display.around,
    },
    j_evenly:{
        justifyContent:display.evenly,
    },
    a_center:{
        alignItems:'center',
    }
})


export const BACKGROUND_STYLES = StyleSheet.create({
    bg_black:{
        backgroundColor:palette.black,
    },
    bg_primary:{
        backgroundColor:palette.primary,
    },
    bg_gray:{
        backgroundColor:palette.gray,
    },
    bg_light:{
        backgroundColor:palette.light,
    }
})

export const TEXT_STYLES = StyleSheet.create({
    text_bold:{
        fontWeight:'bold',
    },
    text_s:{
        fontWeight:textSize.s,
    },
    text_m:{
        fontWeight:'normal',
        fontSize:textSize.m,
    },
    text_xl:{
        fontSize:textSize.xl,
    },
    text_white:{
        color:palette.white,
    },
    text_black:{
        color:palette.black,
    },
    text_error:{
        color:palette.error,
    },
    text_center:{
        textAlign:'center',
    },
    text_left:{
        textAlign:'left',
    },
    toUpper:{
        textTransform:'uppercase',
    },
    toCap:{
        textTransform:'capitalize',
    },
    toLower:{
        textTransform:'lowercase',
    },
    underline:{
        textDecorationLine:'underline',
    }
})

//estos componentes refac
const touchableSystemOpacity = {
    ...DISPLAY_STYLES.d_center,
    height:50,
    borderRadius:50,
    marginTop:10,
    marginBottom:15,
    backgroundColor:palette.system,
    paddingHorizontal:20,
    color:palette.white,
}

export const COMPONENTS_STYLES=StyleSheet.create({
    inputDefault:{
        borderBottomWidth: 2,
        borderBottomColor: palette.gray,
    },
    touchableSystemOpacity:{
       ...touchableSystemOpacity,
    },
    touchableSystemLight:{
        ...touchableSystemOpacity,
        backgroundColor:palette.gray,
        color:palette.system,
    },
    textSystem:{
        fontSize:textSize.m,
        fontWeight:500,
        color:palette.white,
    }
    
})