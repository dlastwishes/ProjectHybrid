import Home from '@Views/home'

import { createStackNavigator , createAppContainer } from 'react-navigation';

const App = createStackNavigator(
  {
    main : {screen : Home}
  }
);

export default createAppContainer(App);