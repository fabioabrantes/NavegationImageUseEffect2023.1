import {View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';

import { styles} from './styles';

interface IParams{
  user:{
    name: string;
    cpf:string;
  }
}
export function PageB() {
  const route = useRoute();
  /* const {user} = route.params as IParams; */
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  function handleMoveTelaA(){
    navigation.navigate('PageA');
  }

  return (
    <View style={styles.container} >
      <Header onBack={handleGoBack} onMove={handleMoveTelaA}/>
    
      <Content name='Tela B'/>
      <Content name='fabioabrantes'/>
    </View>
  );
}