import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

export const styles = StyleSheet.create({

    mainContainer:{
        paddingHorizontal: 24,
    },
    container:{
        backgroundColor: colors.orange,
        paddingVertical: 30,
        borderRadius: 25,
        shadowOpacity: 1,
        shadowRadius: 15,  
        shadowColor: colors.darkblue,   
    },
    title:{
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
})
