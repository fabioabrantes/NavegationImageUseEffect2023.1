import {Button, View} from 'react-native';

import { Content } from '../../components/Content';

import { styles} from './styles';

export function PageE() {


  function handleOpenOrClosedDrawer(){
   
  }
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Button title="Testando o Toggle" onPress={handleOpenOrClosedDrawer}/>
      </View>
      
      <Content nameScreen='Tela E'/>
    </View>
  );
}