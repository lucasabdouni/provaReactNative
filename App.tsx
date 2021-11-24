import React from 'react';

import AppLoading from 'expo-app-loading';

import {
  Poppins_400Regular,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/styles/theme';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
