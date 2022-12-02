import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'

 const Button = ({ title, onPress, style }) => {
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

//Button image atmaya bak.

export default React.memo(Button)