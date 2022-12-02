import { ImageBackground, SafeAreaView, View, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import Header from '../../components/Header'
import Button from '../../components/Button'

const Category = ({navigation}) => {
    const onBack = () => {
        navigation.goBack()
    }
    const onChicken = () => {
      navigation.navigate('ChickenRecipe')
    }

  return (
    <SafeAreaView style={styles.container}>
      
        <Header onBackPress={onBack} title={'Categories'} />

        <ImageBackground source={require('../../assets/chicken_breast.jpg')}>
          <Button onPress={onChicken} style={styles.button} title={'CHICKEN'} />
        </ImageBackground>

        <ImageBackground source={require('../../assets/steak.jpeg')}>
          <Button style={styles.button} title={'STEAK'} />
        </ImageBackground>

        <ImageBackground source={require('../../assets/hamburger.jpeg')}>
          <Button style={styles.button} title={'HAMBURGER'} />
        </ImageBackground>

        <ImageBackground source={require('../../assets/pizza.jpg')}>
          <Button style={styles.button} title={'PIZZA'} />
        </ImageBackground>

        <ImageBackground source={require('../../assets/noodle.jpeg')}>
          <Button style={styles.button} title={'NOODLE'} />
        </ImageBackground>

        <ImageBackground source={require('../../assets/soup.jpeg')}>
          <Button style={styles.button} title={'SOUP'} />
        </ImageBackground>

        <ImageBackground source={require('../../assets/shrimp.webp')}>
          <Button style={styles.button} title={'SHRIMP'} />
        </ImageBackground>

    </SafeAreaView>
  )
}

export default React.memo(Category)
