import { SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'

const ChickenRecipe = ({navigation}) => {

const [data, setData] = useState([])
const [loading, setloading] = useState(true)

const url= "https://yummly2.p.rapidapi.com/feeds/auto-complete"

useEffect(()=>{
  fetch(url)
  .then((response) => response.json())
  .then((json)=>setData(json))
  .catch((error)=>console.error(error))
  .finally(()=>setloading(false))
}, [])

    const onBack = () => {
        navigation.goBack()
    }
    
  return (
    <SafeAreaView>
        <Header onBackPress={onBack} title={'Recipes for Chicken'} />
      <Text> ChickenRecipe </Text>
      {
        loading ? <Text> Loading......</Text> : (
          data.map((post)=>(
            <View>
              <Text>{post.title}</Text>
              <Text>{post.body}</Text>
            </View>
          ))
        )}
      <Text></Text>
      
    </SafeAreaView>
  )
}

export default React.memo(ChickenRecipe);