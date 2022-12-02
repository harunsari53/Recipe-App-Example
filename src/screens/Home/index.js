import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import HomeButton from '../../components/HomeButton'
import { styles } from './style' 

const Home = ({navigation}) => {
  const onCategory = () => {
    navigation.navigate('Category')
  }
  return (
    
    <View style={styles.container}>
      <HomeButton onPress={onCategory} style={styles.button} title ='Discover All Recipes'/>
      <View style={styles.images}>
        <Image style={styles.image} source={require('../../assets/chicken_breast.jpg')}/>
        <Image style={styles.image} source={require('../../assets/fish.jpeg')}/>
      </View>
      <View style={styles.images}>
        <Image style={styles.image} source={require('../../assets/hamburger.jpeg')}/>
        <Image style={styles.image} source={require('../../assets/noodle.jpeg')}/>
      </View>
      <View style={styles.images}>
        <Image style={styles.image} source={require('../../assets/pizza.jpg')}/>
        <Image style={styles.image} source={require('../../assets/shrimp.webp')}/>
      </View>
      <View style={styles.images}>
        <Image style={styles.image} source={require('../../assets/soup.jpeg')}/>
        <Image style={styles.image} source={require('../../assets/steak.jpeg')}/>
      </View>
      <View style={styles.images}>
        <Image style={styles.image} source={require('../../assets/chicken_breast.jpg')}/>
        <Image style={styles.image} source={require('../../assets/fish.jpeg')}/>
      </View>
    </View>
  )
}

export default React.memo(Home);