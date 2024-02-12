import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BuscadorCEP from "./src/BuscadorCEP";

const App=()=>{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Buscador de CEP</Text>
      <BuscadorCEP/>
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    marginTop:50, // Ajustando o espaçamento superior do titulo
    color:'#007bff',
    textTransform:'uppercase',
  },

});


export default App;