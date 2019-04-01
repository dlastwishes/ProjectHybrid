import Home from '@Views/Home'

import { createStackNavigator , createAppContainer } from 'react-navigation';

const App = createStackNavigator(
  {
    main : {screen : Home}
  },
  {
    initialRouteName: 'main',
    }
);

export default createAppContainer(App);