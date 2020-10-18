import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

interface TextProps {
  fontFamily?: string;
  color?: string;
}

const { width, height } = Dimensions.get('window')

const Container = styled.View``

const MapWrapper = styled.View`
  width: ${width};
  height: ${height};
`

const MarkerView = styled.View`
  padding: 0 16px;
  width: 160px;
  height: 46px;
  border-radius: 16px;
  background-color: ${(props) => (props.theme.colors.whiteLight)};
  justify-content: center;
`

const Text = styled.Text`
  font-size: 14px;
  font-family: ${(props: TextProps) => (props.fontFamily ? props.fontFamily : 'Nunito_700Bold')};
  color: ${(props) => (props.color ? props.theme.colors.blueMediumLight : props.theme.colors.text)};
`

const MapFooter = styled.View`
  position: absolute;
  left: 25px;
  right: 25px;
  bottom: 32px;
  padding-left: 25px;
  height: 46px;
  border-radius: 20px;
  background-color: ${(props) => (props.theme.colors.white)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 3;
`

const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  background-color: ${(props) => (props.theme.colors.primary)};
  justify-content: center;
  align-items: center;
`

export {
  Container,
  MapWrapper, MarkerView,
  Text,
  MapFooter, Button,
}
