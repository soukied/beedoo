import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, BackHandler} from 'react-native';
import {Button, Input} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";



export default function App() {
  let defaultHeader = "Hello World!";

  let [getHeader, setHeader] = useState(defaultHeader);
  let [getValue, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{fontSize:24, marginBottom: 20, fontWeight:"bold", letterSpacing:3, textDecorationLine:"underline"}}>{getHeader}</Text>
      <Input style={{marginBottom:20}} onChangeText={(val) => {setValue(val)}} placeholder="Insert your name" value={getValue}/>
      <View style={{flexDirection:"row"}}>
        <Button
        icon={<Icon name="check-circle" size={15} color="blue"/>}
        buttonStyle={{fontSize:10, borderColor:"blue", marginRight: 10}}
        titleStyle={{color:"blue"}}
        title="Click me" type="outline" onPress={()=>{
          if (getValue.trim().length > 0) {
            setHeader(`Hello ${getValue.trim()}!`);
            setTimeout(()=>setHeader(defaultHeader), 1000);
          } 
        }}/>
        <Button
        type="outline"
        titleStyle={{color:"red"}}
        buttonStyle={{borderColor:"red"}}
        onPress={
          ()=>Alert.alert("Quit", "Are you sure you want to quit?", [
            {text:"Yes", onPress:()=>{BackHandler.exitApp()}}, {text:"No", onPress:()=>{}}
          ])
        }
        icon={
          <Icon size={15} color="red" name="cancel"/>
        } title="Exit"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
