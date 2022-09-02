import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { Header } from './src/components';
import { LogIn, List, SignUp } from "./src/screens";

const AppNavigator = createStackNavigator({
  LogIn: {
      screen: LogIn
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: "LogIn",
      contentOptions: {
        activeTintColor: 'red'
     }
  });
  
  const Routes = createAppContainer(AppNavigator);
  
  export default Routes;