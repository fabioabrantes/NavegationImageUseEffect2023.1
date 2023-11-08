import { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';

import{ styles} from './styles';


export function HookUseEffect() {

  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState(' ');

  function handleIncrement(){
    setCount(count => count +1);
 }

 useEffect(() => {
   setMsg('O componente foi montado/atualizado ' + count + ' vez(es)');
 },[count]);



  return(
    <View style={styles.container}>
      <Text style={styles.texto}>Você clicou {count} vez(es)</Text>
      <Text style={styles.texto}>{msg}</Text>
      <Button
        title="Clique Aqui"
        onPress={handleIncrement}
      />
    </View>
  );
}

