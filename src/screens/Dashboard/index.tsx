import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Photo,
  PhotoView,
  Subtitle,
  Title,
  TitleHeader,
  Footer,
  TitleFooter,
  ButtonTitle,
  Select,
  Button,
} from './styles';
import { ScrollView } from 'react-native';

interface Params {
  user: {
    name: string;
  };
}

type Props = {
  active?: boolean;
};

export function Dashboard({ active }: Props) {
  const [actived, setActived] = useState(false);
  const route = useRoute();

  const { user } = route.params as Params;

  const buttonsName = ['Sala', 'Quarto', 'Cozinha', 'Banheiro', 'Garagem'];

  return (
    <Container>
      <Header>
        <TitleHeader>
          <Title>Olá, {'\n'}</Title>
          <Subtitle>{user.name}</Subtitle>
        </TitleHeader>
        <PhotoView>
          <Photo
            source={{
              uri: 'https://avatars.githubusercontent.com/u/67294018?v=4',
            }}
          />
        </PhotoView>
      </Header>

      <Footer>
        <TitleFooter>
          Em qual ambiente {'\n'}
          você quer colocar sua planta?
        </TitleFooter>

        <Select>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {buttonsName.map((item) => (
              <Button onPress={() => {}} active={actived}>
                <ButtonTitle>{item}</ButtonTitle>
              </Button>
            ))}
          </ScrollView>
        </Select>
      </Footer>
    </Container>
  );
}
