import {View, Text} from 'react-native';
import { styles } from './styles';

interface IProps{
  name:string;
}
export function Content({name}:IProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.namePage}>{name}</Text>
    </View>
  );
}