import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { ThemeContext } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito'

import mapMarker from '~/assets/images/marker/map-marker.png'

import {
  Container,
  MapWrapper,
  MarkerView,
  Text,
  MapFooter,
  Button,
} from './styles'

export default function OrphanagesMap() {
  const { colors } = useContext(ThemeContext)
  const navigation = useNavigation()

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })

  if (!fontsLoaded) {
    return null
  }

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails')
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
          <Marker
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude: -21.181709167645227,
              longitude: -47.85418156841395,
            }}
          >
            <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
              <MarkerView>
                <Text>Lar das meninas</Text>
              </MarkerView>
            </Callout>
          </Marker>
        </MapView>

        <MapFooter>
          <Text color="blueMediumLight">2 orfanatos encontrados</Text>

          <Button onPress={() => {}}>
            <Feather name="plus" size={20} color={colors.white} />
          </Button>
        </MapFooter>
      </MapWrapper>
    </Container>
  )
}
