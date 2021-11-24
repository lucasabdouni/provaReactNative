import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 40}px;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-size: 30px;
`;

export const Footer = styled.View`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  line-height: 22px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 45px;
  height: 45px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.button};
`;
