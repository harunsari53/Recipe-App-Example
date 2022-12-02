import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'

const Header = ({title, onBackPress}) => {

  return (
    <View style={styles.mainContainer}>
      <View style= {styles.container}>
          <TouchableOpacity activeOpacity={0.9} onPress={onBackPress}>
              <Image style={styles.image} source={require('../../assets/back.png')}/>
          </TouchableOpacity>
        <Text style={styles.title}> {title} </Text>
        <View style={styles.space} />
      </View>
    </View>
  )
}

export default React.memo(Header)
