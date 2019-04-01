import React, { Component } from 'react';
import { createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation' ;
import HomeScreen from '@Views/Home';
import ReadMore from '@Views/ViewArticle'
import Signout from '@Views/LoginView';
import DrawerCustom from '@Widgets/DrawerCustom'

 const DrawerNavigator = createDrawerNavigator(
  {
     Home: {
         screen: HomeScreen
     },
     Signout: {
         screen: Signout
     }
  },
  {
    contentComponent: DrawerCustom,
  drawerWidth: 300
  }
 ) ;

 const StackMedium = createStackNavigator(
  {
     main: {
         screen: DrawerNavigator
     },
     readmore : {
       screen : ReadMore
     },
  },{
    headerMode: 'none',
  }
 ) ;



const Drawer = createAppContainer(StackMedium) ;

export default Drawer ;
