import {View, Text, TouchableOpacity} from 'react-native'

import { styles} from './styles';

interface IProps {
  onBack?:()=>void;
  onMove?:()=>void;
}

export function Header({onBack,onMove}:IProps) {
  
  
  return (
    <View style={[styles.container, {justifyContent: (!!onBack ||!!onMove)?'center':'space-between'}]}>
          {
          onBack && (
              <TouchableOpacity onPress={onBack}style={[styles.button,{backgroundColor:'blue'}]}>
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>
            )
          }
          
          {
          onMove && (
              <TouchableOpacity onPress={onMove}style={[styles.button,{backgroundColor:'green'}]}>
                <Text style={styles.buttonText}>Avançar</Text>
              </TouchableOpacity>
            )
          }
    </View>
  );
}