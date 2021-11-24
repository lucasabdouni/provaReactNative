import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 180px;
  height: 45px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.button_secondary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.button_title};
`;
