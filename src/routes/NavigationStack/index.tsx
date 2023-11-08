import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PageA} from '../../screens/PageA';
import {PageB} from '../../screens/PageB';
import {PageC} from '../../screens/PageC';

import {NavigationTab} from '../NavigationTab';

const {Navigator,Screen} = createNativeStackNavigator();

export function NavigationStack(){
  return (
    <Navigator 
      initialRouteName='PageA' 
      screenOptions={{headerShown:false}}
      >
      <Screen name="PageA" component={PageA} />
      <Screen name="PageB" component={PageB} />
      <Screen name="PageC" component={PageC} />
      <Screen name="NavigationTab" component={NavigationTab} />

    </Navigator>
  )
}