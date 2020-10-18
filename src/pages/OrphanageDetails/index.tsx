import React, { useContext, useState, useEffect } from 'react'
import { Linking } from 'react-native'
import { useRoute } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { ThemeContext } from 'styled-components/native'
import { Feather, FontAwesome } from '@expo/vector-icons'

import api from '~/services/api'

import mapMarkerImg from '~/assets/images/marker/map-marker.png'

import {
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
} from './styles'

interface OrphanageDetailsRouteParams {
  id: number;
}

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>
}

export default function OrphanageDetails() {
  const { colors } = useContext(ThemeContext)
  const route = useRoute()
  const [orphanage, setOrphanage] = useState<Orphanage>()

  const params = route.params as OrphanageDetailsRouteParams

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data)
    })
  }, [params.id])

  if (!orphanage) {
    return (
      <Container>
        <Text>Carregando ...</Text>
      </Container>
    )
  }

  function handleOpenGoogleMapRoutes() {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`)
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView>
          {orphanage.images.map(image => {
            return (
              <Image
                key={image.id}
                source={{ uri: image.url }}
              />
            )
          })}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <MapView
            style={{ width: '100%', height: 150 }}
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </MapView>

          <GoogleContainer onPress={handleOpenGoogleMapRoutes}>
            <Text>Ver rotas no Google Maps</Text>
          </GoogleContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem>
            <ScheduleItemBlue>
              <Feather name="clock" size={40} color={colors.icon} />
              <Text fontSize="16px" color={colors.description}>Segunda à Sexta {orphanage.opening_hours}</Text>
            </ScheduleItemBlue>
          </ScheduleItem>

          <ScheduleItem>
            {orphanage.open_on_weekends ? (
              <ScheduleItemGreen>
                <Feather name="info" size={40} color={colors.active} />
                <Text fontSize="16px" color={colors.green}>Atendemos nos finais de semana</Text>
              </ScheduleItemGreen>
            ) : (
              <ScheduleItemRed>
                <Feather name="info" size={40} color={colors.iconRed} />
                <Text fontSize="16px" color={colors.iconRed}>Não atendemos nos finais de semana</Text>
              </ScheduleItemRed>
            )}
          </ScheduleItem>
        </ScheduleContainer>

        <Button>
          <FontAwesome name="whatsapp" size={24} color={colors.white} />
          <Text
            fontSize="16px"
            fontFamily="Nunito_800ExtraBold"
            color={colors.white}
            margin="0 0 0 16px"
          >Entrar em contato</Text>
        </Button>
      </DetailsContainer>
    </Container>
  )
}
