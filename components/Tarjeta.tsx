import { Alert, Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


export default function Tarjeta( props : any ) {
    console.log(props.datos.images.main);
    const [modalVisible, setmodalVisible] = useState(false)

    function detalles( nombre: string, ocupacion: string, edad: string){
        Alert.alert(nombre, "Ocupacion: "+ ocupacion + "\nEdad: "+ edad)
    }

  return (
    <TouchableOpacity 
        style={styles.btn} 
        //onPress={ ()=> detalles(
        //    props.datos.first,
        //    props.datos.occupation,
        //    props.datos.age
        //)}
        onPress={ () => setmodalVisible(true)}
    >
      <Text>{props.datos.name.first} {props.datos.name.last}</Text>
      <Image 
        source={{ uri: props.datos.images.main }}
        style={styles.img}
      />
      <Text>{props.datos.species} {props.datos.homePlanet}</Text>
      <Modal visible={modalVisible}>
        <Text style={{fontSize: 30, textAlign:'center'}} >{props.datos.name.first} {props.datos.name.middle} {props.datos.name.last}</Text>
        <Image 
        source={{ uri: props.datos.images.main }}
        style={styles.img}
        />
        <Text style={{fontSize: 20, textAlign:'center'}}>{props.datos.occupation}</Text>
        <Button title='Salir' onPress={()=> setmodalVisible(false)}/>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 250,
        resizeMode: 'contain'
    },
    btn:{
        backgroundColor: "#6666",
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 20
    }
    
})