import React, { useContext, useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { ThemeContext } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import api from '~/services/api'

import mapMarkerImg from '~/assets/images/marker/map-marker.png'

import {
  Container,
  MapWrapper,
  MarkerView,
  Text,
  MapFooter,
  Button,
} from './styles'

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  const { colors } = useContext(ThemeContext)
  const navigation = useNavigation()

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  })

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return null
  }

  function handleNavigateToOrphanageDetails(id: number) {
    navigation.navigate('OrphanageDetails', { id })
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition')
  }

  return (
    <Container>
      <MapWrapper>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -21.181709167645227,
            longitude: -47.85418156841395,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
          {orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapMarkerImg}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8,
                }}
                coordinate={{
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                }}
              >
                <Callout
                  tooltip
                  onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
                >
                  <MarkerView>
                    <Text>{orphanage.name}</Text>
                  </MarkerView>
                </Callout>
              </Marker>
            )
          })}
        </MapView>

        <MapFooter>
          {orphanages.length > 1 ? (
            <Text color="blueMediumLight">{orphanages.length} orfanatos encontrados</Text>
          ) : (
            <Text color="blueMediumLight">{orphanages.length} orfanato encontrado</Text>
          )}

          <Button onPress={handleNavigateToCreateOrphanage}>
            <Feather name="plus" size={20} color={colors.white} />
          </Button>
        </MapFooter>
      </MapWrapper>
    </Container>
  )
}
