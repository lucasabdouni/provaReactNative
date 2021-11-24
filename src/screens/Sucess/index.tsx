import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '../../components/Button';

import { Container, Header, Subtitle, Title } from './styles';

interface Params {
  user: {
    name: string;
  };
}

export function Sucess() {
  const route = useRoute();
  const navigation = useNavigation();

  const { user } = route.params as Params;

  function handleGoPage() {
    navigation.navigate('Dashboard', { user });
  }

  return (
    <Container>
      <Header>😄</Header>

      <Title>Prontinho</Title>

      <Subtitle>
        Agora vamos começar a cuidar das suas {'\n'}
        plantinhas com muito cuidado.
      </Subtitle>

      <Button title="Começar" onPress={handleGoPage} />
    </Container>
  );
}
