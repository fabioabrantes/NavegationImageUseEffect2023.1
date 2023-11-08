
import { AntDesign } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {PageA} from '../../screens/PageA';
import {PageB} from '../../screens/PageB';
import {PageC} from '../../screens/PageC';


const {Navigator,Screen} = createBottomTabNavigator();
export function NavigationTab(){
  
  return (
    <Navigator 
    initialRouteName='PageA' 
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'pink',
      tabBarLabelStyle:{
        fontSize:16,
        color:'black',
        fontWeight:'bold'
      },
      tabBarLabelPosition:'beside-icon',
      tabBarActiveBackgroundColor:'gray',
      
    }}
    >
    <Screen 
      name="PageA" 
      component={PageA}
      options={{
        title:'tela A',
        tabBarIcon:({size,color})=>(
          <AntDesign name="checkcircle" size={size} color="blue" />
        )
      }
      }
      />
    <Screen 
      name="PageB" 
      component={PageB}
      options={{
        title:'tela B',
        tabBarIcon:({size,color})=>(
          <AntDesign name="checkcircle" size={size} color="red" />
        )
      }
      }
    />
    <Screen 
      name="PageC" 
      component={PageC} 
      options={{
        title:'tela C',
        tabBarIcon:({size,color})=>(
          <AntDesign name="checkcircle" size={size} color="green" />
        )
      }
      }
    />
  </Navigator>
  )
}