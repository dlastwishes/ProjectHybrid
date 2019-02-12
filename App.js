import Weather from '@Components/Weather/weather'

import { createStackNavigator , createAppContainer } from 'react-navigation';

const App = createStackNavigator(
  {
    main : {screen : Weather},
  }
);

export default createAppContainer(App);