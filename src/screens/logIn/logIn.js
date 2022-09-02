import React, { useState } from 'react';
import { Button, Text, TextInput, View } from "react-native";
import global from "../../../style/global";

const LogIn = ({ navigation }) => {
  // Global style
    const { container, input } = global;
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

  return (
    <View style={container}>
        <TextInput
           style={input}
           placeholder="Email"
           onChangeText={(value=> setEmail(value))}
           value={email}
        />
         <TextInput
           secureTextEntry
           style={input}
           placeholder="Password"
           onChangeText={(value=> setPassword(value))}
           value={password}
        />
        <Button  title="Log in" />
        <Text>If you don't have account please <Button onPress={()=> navigation.push("SignUp")} title="Sign up" /> </Text>
    </View>
  )
}

export default LogIn;
