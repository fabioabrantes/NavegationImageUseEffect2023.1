import { StatusBar } from 'react-native';
import { Routes } from './src/routes';
import { Images } from './src/screens/Images';
import { HookUseEffect } from './src/screens/HookUseEffect';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <Routes /> */}
      <Images/>
      {/* <ImageComponent /> */}
     {/*  <HookUseEffect/> */}
    </>
  );
}


