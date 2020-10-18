import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'

interface TextProps {
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  margin?: string;
}

const { width } = Dimensions.get('window')

const ScheduleItemCSS = css`
  padding: 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
`

const Container = styled.ScrollView`
  flex: 1;
`

const ImagesContainer = styled.View`
  height: 240px;
`

const ScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  pagingEnabled: true,
})``

const Image = styled.Image`
  width: ${width};
  height: 240px;
`

const DetailsContainer = styled.View`
  padding: 25px;
`

const Title = styled.Text`
  color: ${(props) => (props.theme.colors.title)};
  font-size: 30px;
  font-family: ${(props: TextProps) => (props.fontFamily ? props.fontFamily : 'Nunito_700Bold')};
`

const Description = styled.Text`
  margin-top: 16px;
  color: ${(props) => (props.theme.colors.description)};
  font-size: 24px;
  font-family: ${(props: TextProps) => (props.fontFamily ? props.fontFamily : 'Nunito_600SemiBold')};
`

const MapContainer = styled.View`
  margin-top: 40px;
  border: 1.2px solid ${(props) => (props.theme.colors.borderMap)};
  border-radius: 20px;
  background: ${(props) => (props.theme.colors.backgroundMap)};
  overflow: hidden;
`

const GoogleContainer = styled.TouchableOpacity`
  padding: 16px;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  color: ${(props) => (props.color ? props.color : props.theme.colors.text)};
  font-size: ${(props: TextProps) => (props.fontSize ? props.fontSize : '14px')};
  font-family: ${(props: TextProps) => (props.fontFamily ? props.fontFamily : 'Nunito_700Bold')};
`

const Separator = styled.View`
  margin: 40px 0 20px;
  width: 100%;
  height: 0.8px;
  background: ${(props) => (props.theme.colors.separator)};
`

const ScheduleContainer = styled.View`
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-between;
`

const ScheduleItem = styled.View`
  width: 48%;
`

const ScheduleItemBlue = styled.View`
  ${ScheduleItemCSS};
  border-color: ${(props) => (props.theme.colors.borderMap)};
  background-color: ${(props) => (props.theme.colors.backgroundMap)};
`

const ScheduleItemGreen = styled.View`
  ${ScheduleItemCSS};
  border-color: ${(props) => (props.theme.colors.borderGreen)};
  background-color: ${(props) => (props.theme.colors.scheduleGreen)};
`

const ScheduleItemRed = styled.View`
  ${ScheduleItemCSS};
  border-color: ${(props) => (props.theme.colors.dontOpenBorder)};
  background-color: ${(props) => (props.theme.colors.dontOpenBG)};
`

const Button = styled.TouchableOpacity`
  margin-top: 40px;
  height: 56px;
  border-radius: 20px;
  background-color: ${(props) => (props.theme.colors.greenLight)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export {
  Container,
  ImagesContainer,
  ScrollView,
  Image,
  DetailsContainer,
  Title,
  Description,
  MapContainer,
  GoogleContainer,
  Text,
  Separator,
  ScheduleContainer,
  ScheduleItem,
  ScheduleItemBlue,
  ScheduleItemGreen,
  ScheduleItemRed,
  Button,
}
