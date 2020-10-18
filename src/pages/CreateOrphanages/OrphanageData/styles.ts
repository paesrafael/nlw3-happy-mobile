import styled from 'styled-components/native'

interface TextInputProps {
  multiline?: boolean;
  height?: string;
}

const Container = styled.ScrollView`
  padding: 25px;
  flex: 1;
`

const Title = styled.Text`
  padding-bottom: 24px;
  margin-bottom: 32px;
  color: ${(props) => (props.theme.colors.description)};
  font-size: 25px;
  font-family: 'Nunito_700Bold';
  border-bottom-width: 0.8px;
  border-style: solid;
  border-color: ${(props) => (props.theme.colors.separator)};
`

const Label = styled.Text`
  margin-bottom: 8px;
  color: ${(props) => (props.theme.colors.description)};
  font-family: 'Nunito_700Bold';
`

const TextInput = styled.TextInput`
  padding: 0 20px;
  margin-bottom: 16px;
  height: ${(props: TextInputProps) => (props.height ? props.height : '56px')};
  border: 1.4px solid ${(props) => (props.theme.colors.separator)};
  border-radius: 20px;
  background: ${(props) => (props.theme.colors.white)};
`

const ImagesButton = styled.TouchableOpacity`
  margin-bottom: 32px;
  height: 56px;
  border: 1.4px dashed ${(props) => (props.theme.colors.borderDashed)};
  border-radius: 20px;
  background: ${(props) => (props.theme.colors.whiteLight)};
  justify-content: center;
  align-items: center;
`

const UploadsImagesContainer = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
`

const Image = styled.Image`
  margin-right: 20px;
  width: 65px;
  height: 65px;
  border-radius: 20px;
`

const SwitchContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.TouchableOpacity`
  margin: 32px 0 50px 0;
  height: 56px;
  border-radius: 20px;
  background: ${(props) => (props.theme.colors.primary)};
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  color: ${(props) => (props.theme.colors.white)};
  font-size: 16px;
  font-family: 'Nunito_800ExtraBold';
`

export {
  Container,
  Title,
  Label,
  TextInput,
  ImagesButton,
  UploadsImagesContainer,
  Image,
  SwitchContainer,
  Button,
  Text,
}
