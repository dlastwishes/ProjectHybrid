import React, { Component } from "react";
import Settings from '@Views/Settings'
import Home from '@Views/Home'

import { createDrawerNavigator , createAppContainer } from 'react-navigation';

  const DrawerNavigator = createDrawerNavigator({
    Setting: {
      screen: Settings,
    },
   
  },
  );

  export default createAppContainer(DrawerNavigator);