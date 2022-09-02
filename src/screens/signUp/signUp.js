import React, { useState } from 'react';
import { Button, TextInput, View } from "react-native";
import global from "../../../style/global";

const SignUp = () => {

   // Global style
   const { container, input } = global;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState();
   
    const submitAction = ()=> {
      setData({
        name,
        email,
        password
      }) 
    }

  return (
    <View style={container}>
        <TextInput
           style={input}
           placeholder="Name"
           onChangeText={(value=> setName(value))}
           value={name}
        />
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
        <Button onPress={()=> submitAction()} title="Sign up" />
    </View>
  )
}

export default SignUp;

