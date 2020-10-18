import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker, MapEvent } from 'react-native-maps'

import mapMarkerImg from '~/assets/images/marker/map-marker.png'

import {
  Container,
  MapContainer,
  Button,
  Text
} from './styles'

export default function SelectMapPosition() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const navigation = useNavigation()

  function handleNextStep() {
    navigation.navigate('OrphanageData', { position })
  }

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate)
  }

  return (
    <Container>
      <MapContainer>
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: -21.181709167645227,
            longitude: -47.85418156841395,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          onPress={handleSelectMapPosition}
        >
          {position.latitude !== 0 && (
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
            />
          )}
        </MapView>

        {position.latitude !== 0 && (
          <Button onPress={handleNextStep}>
            <Text>Próximo</Text>
          </Button>
        )}
      </MapContainer>
    </Container>
  )
}
