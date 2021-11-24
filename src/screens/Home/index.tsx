import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, Footer, Header, Title, Subtitle, Button } from './styles';
import IllustrationPng from '../../assets/watering.png';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface NavigationProps {
  navigate: (screen: string) => void;
}

export function Home() {
  const navigation = useNavigation<NavigationProps>();

  function handleGoPage() {
    navigation.navigate('Identification');
  }

  return (
    <Container>
      <Header>
        <Title>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Title>
      </Header>

      <Image source={IllustrationPng} />

      <Footer>
        <Subtitle>
          Não esqueça mais de regar suas {'\n'}
          plantas. Nós cuidamos de lembrar você {'\n'}
          sempre que precisar.
        </Subtitle>
      </Footer>

      <Button onPress={handleGoPage}>
        <Ionicons name="chevron-forward" size={24} color="white" />
      </Button>
    </Container>
  );
}
