import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    images:{
        flexDirection: 'row',
        zIndex: -1,
    },
    image: {
        width: 200,
        height: 200,
        opacity: 0.9,
    },
    button:{
        position: 'absolute',
        alignSelf: 'center',
        marginVertical: (height - 175)/2,
    },
})