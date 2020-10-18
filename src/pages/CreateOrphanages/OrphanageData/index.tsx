import React, { useContext, useState } from 'react'
import { Switch } from 'react-native'
import { ThemeContext } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import api from '~/services/api'

import {
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
} from './styles'

interface OrphanageDataRouteParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

export default function OrphanageData() {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [openingHours, seetOpeningHours] = useState('')
  const [openOnWeekends, seetOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<string[]>([])

  const { colors } = useContext(ThemeContext)

  const navigation = useNavigation()
  const route = useRoute()
  const params = route.params as OrphanageDataRouteParams

  async function handleCreateOrphanage() {
    const { latitude, longitude } = params.position

    const data = new FormData()

    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('instructions', instructions)
    data.append('opening_hours', openingHours)
    data.append('open_on_weekends', String(openOnWeekends))

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any)
    })

    await api.post('orphanages', data)

    navigation.navigate('OrphanagesMap')
  }

  async function handleSelectImage() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()

    if (status !== 'granted') {
      alert('Precisamos de acesso a sua galeria de fotos!')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (result.cancelled) {
      return
    }

    const { uri: image } = result

    setImages([...images, image])
  }

  return (
    <Container>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <TextInput
        value={name}
        onChangeText={setName}
      />

      <Label>Sobre</Label>
      <TextInput
        multiline
        height="110px"
        value={about}
        onChangeText={setAbout}
      />

      {/* <Label>Whatsapp</Label>
      <TextInput
        value={whatsapp}
        onChangeText={setWhatsapp}
      /> */}

      <Label>Fotos</Label>
      <UploadsImagesContainer>
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              source={{ uri: image }}
            />
          )
        })}
      </UploadsImagesContainer>
      <ImagesButton onPress={handleSelectImage}>
        <Feather name="plus" size={24} color={colors.secondary} />
      </ImagesButton>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <TextInput
        multiline
        height="110px"
        value={instructions}
        onChangeText={setInstructions}
      />

      <Label>Horário de visitas</Label>
      <TextInput
        value={openingHours}
        onChangeText={seetOpeningHours}
      />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor={colors.white}
          trackColor={{ false: colors.grayMedium, true: colors.active }}
          value={openOnWeekends}
          onValueChange={seetOpenOnWeekends}
        />
      </SwitchContainer>

      <Button onPress={handleCreateOrphanage}>
        <Text>Cadastrar</Text>
      </Button>
    </Container>
  )
}
