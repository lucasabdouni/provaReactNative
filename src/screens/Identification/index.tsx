import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Container, Form, Header, Input, Title } from './styles';

export function Identification() {
  const navigation = useNavigation();
  const [name, setName] = useState('');

  const user = {
    name: name,
  };

  function handleSubmit() {
    navigation.navigate('Sucess', { user });
  }

  return (
    <Container>
      <Header>😀</Header>

      <Title>
        Como podemos {'\n'}
        chamar você?
      </Title>

      <Form>
        <Input
          placeholder="Digite um nome"
          value={name}
          onChangeText={setName}
        />
      </Form>

      <Button
        title="Confirmar"
        onPress={handleSubmit}
        style={{ opacity: 0.8 }}
      />
    </Container>
  );
}
