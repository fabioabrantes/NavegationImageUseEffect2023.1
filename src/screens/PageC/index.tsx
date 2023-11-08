import {View} from 'react-native';

import { Header } from '../../components/Header';
import { Content } from '../../components/Content';

import { styles} from './styles';

interface IParams{
  numero: number;
}

export function PageC() {

  

  function handleGoBack(){
  }

  function handleMoveScreenDrawer(){
  }

  return (
    <View style={styles.container} >
      <Header onBack={handleGoBack} onMove={handleMoveScreenDrawer}/>
    
      <Content name='Tela C'/>
      <Content name='jose'/>
    </View>
  );
}