import {NavigationContainer} from '@react-navigation/native';

import {NavigationStack} from './NavigationStack';
import {NavigationTab} from './NavigationTab';



export function Routes(){
  return (
    <NavigationContainer>
      <NavigationStack/>
      {/* <NavigationTab/> */}
    </NavigationContainer>
  )
}