import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.Text`
  font-size: 35px;
`;

export const Title = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-size: 25px;

  color: ${({ theme }) => theme.colors.title};
`;

export const Form = styled.View`
  margin-top: 35px;
`;

export const Input = styled.TextInput`
  width: 230px;
  text-align: center;

  border-style: solid;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.title_secondary};

  margin-bottom: 35px;
`;
