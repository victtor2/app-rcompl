import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import Tarjeta from '../components/Tarjeta';

export default function GameScreen() {
  const [data, setData] = useState("");
  
  useEffect(() => {
    getData()
    //console.log(data);
  }, [])
  

  //FUNCION PARA LEER API
  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/futurama/characters');
      const json = await resp.json();
      setData(json);
      } catch (err) {
        
      }
  }    

  return (
    <View>
      <Text>GameScreen</Text>
      <FlatList
          data={data}
          renderItem={ ( {item} )=> 
            <Tarjeta datos = {item}/>
          }
      />
    </View>
  )
}


const styles = StyleSheet.create({})