import styled from 'styled-components/native'

interface TextProps {
  fontFamily?: string;
  color?: string;
}

const Container = styled.View`
  padding: 45px 25px 25px;
  border: 1px solid ${(props) => (props.theme.colors.border)};
  background-color: ${(props) => (props.theme.colors.gray)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const View = styled.View``

const Text = styled.Text`
  font-size: 16px;
  font-family: ${(props: TextProps) => (props.fontFamily ? props.fontFamily : 'Nunito_600SemiBold')};
  color: ${(props) => (props.color ? props.theme.colors.blueMediumLight : props.theme.colors.text)};
`

export {
  Container, View, Text,
}
