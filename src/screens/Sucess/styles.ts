import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.Text`
  font-size: 85px;
`;

export const Title = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-size: 25px;

  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled.Text`
  margin-top: 15px;
  margin-bottom: 35px;
  text-align: center;
  font-size: 15px;

  color: ${({ theme }) => theme.colors.title};
`;
