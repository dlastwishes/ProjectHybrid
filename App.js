import Weather from '@Components/Weather/weather'
import mainContract from '@Components/ContactItem/main'
import Contract from '@Components/ContactItem/ContactItem'
import main from '@Components/main'
import ContactDetail from '@Components/ContactItem/ContractDetail'

import { createStackNavigator , createAppContainer } from 'react-navigation';

const App = createStackNavigator(
  {
    main : {screen : Contract},
    contractDetail : {screen : ContactDetail},
  }
);

export default createAppContainer(App);