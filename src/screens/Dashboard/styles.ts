import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

type Props = {
  active?: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;

  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 35}px;

  padding: 0 35px;
`;
export const TitleHeader = styled.View``;
export const Title = styled.Text`
  font-size: 22px;
`;
export const Subtitle = styled.Text`
  margin-top: -30px;
  font-size: 30px;
`;
export const PhotoView = styled.View``;

export const Photo = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 25px;
`;

export const Footer = styled.View`
  margin-top: 35px;
  padding: 0 35px;
`;

export const TitleFooter = styled.Text`
  font-size: 13px;
`;

export const Select = styled.View`
  margin-top: 20px;

  flex-direction: row;
`;

export const Button = styled.TouchableOpacity<Props>`
  justify-content: center;
  align-items: center;

  margin-left: 5px;

  border-radius: 5px;

  width: 65px;
  height: 25px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.button : theme.colors.title_secondary};
`;

export const ButtonTitle = styled.Text``;
