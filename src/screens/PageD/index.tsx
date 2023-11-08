import {Button, View} from 'react-native';

import { Content } from '../../components/Content';

import { styles} from './styles';

export function PageD() {


  function handleMoveScreenE(){
  }

  function handleMoveScreenTab(){
  }
  
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Button title="Ir para Tela E" onPress={handleMoveScreenE}/>
        <Button title="Ir para Tela de Tab" onPress={handleMoveScreenTab}/>
      </View>
      
      <Content nameScreen='Tela D'/>
    </View>
  );
}