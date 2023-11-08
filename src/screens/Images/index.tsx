import {useState} from 'react';
import {Image, Text, View, Dimensions} from 'react-native';

import LogoIFPB from '../../assets/logoIFPB.png';
import DefaultImage from '../../assets/placeholder.png';

import LogoZumbi  from  '../../assets/zumbi.svg';

import {styles} from './styles';


export function Images(){
  const [status, setStatus] = useState('');
  const {width,height} = Dimensions.get('window');

  console.log(width, height);
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>{"Logomarca do Zumbi"}</Text>
      <LogoZumbi width={100} height={100}/>

      <Image style={styles.sample} source={LogoIFPB} />

      <Image 
        style={styles.sample}
        source={{uri:'https://github.com/fabioabrantes.png'}}
        defaultSource={DefaultImage}
        onLoadStart={() => {
          setStatus('carregando');
        }}
        onLoad={() => setStatus('carregou!')}
      />
      <Text style={styles.loadImage}>{status}</Text>     
      
    </View>
  );
};
