import Weather from '@Components/Weather/weather'
import mainContract from '@Components/ContactItem/main'
import Contract from '@Components/ContactItem/ContactItem'
import main from '@Components/main'

import { createStackNavigator , createAppContainer } from 'react-navigation';

const App = createStackNavigator(
  {
    main : {screen : main},
    weather : {screen : Weather},
  }
);

export default createAppContainer(App);