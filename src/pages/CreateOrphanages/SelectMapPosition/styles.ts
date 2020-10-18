import styled from 'styled-components/native'

const Container = styled.View`
  position: relative;
  flex: 1;
`

const MapContainer = styled.View``

const Button = styled.TouchableOpacity`
  position: absolute;
  left: 25px;
  right: 25px;
  bottom: 40px;
  height: 56px;
  border-radius: 20px;
  background-color: ${(props) => (props.theme.colors.primary)};
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  color: ${(props) => (props.theme.colors.white)};
  font-size: 16px;
  font-family: 'Nunito_800ExtraBold';
`

export {
  Container, MapContainer,
  Button, Text,
}
