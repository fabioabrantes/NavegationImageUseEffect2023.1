import {useNavigation} from '@react-navigation/native'
import {View} from 'react-native';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';

import { styles} from './styles';

export function PageA() {

  const navigation = useNavigation();
  function handleMovetoScreenB(){
    let user={
      name:'fabio',
      cpf:'111111111'
    }
    navigation.navigate('NavigationTab');
  }
  
  return (
    <View style={styles.container} >
      <Header onMove={handleMovetoScreenB}/>
      
      <Content name='Tela A'/>
    </View>
  );
}