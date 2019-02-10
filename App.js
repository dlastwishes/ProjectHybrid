import React, { Component } from 'react';
import ToggleButton from '@Components/ToggleButton'

import { createStackNavigator , createAppContainer } from 'react-navigation';

const App = createStackNavigator(
  {
    main : {screen : ToggleButton},
  }
);

export default createAppContainer(App);