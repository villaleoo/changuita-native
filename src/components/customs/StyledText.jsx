import react from "react";
import { Text } from "react-native";
import { TEXT_STYLES} from "../../constants/theme";

export default function StyledText({children, ...props}){
    const textStyles= Object.keys(props).map((prop) => TEXT_STYLES[prop]);
  
    return(
        <Text style={[textStyles, props]}>
            {children}
        </Text>
    )
}