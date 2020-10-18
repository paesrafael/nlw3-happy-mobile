import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { ThemeContext } from 'styled-components/native'

const { Navigator, Screen } = createStackNavigator()

import OrphanagesMap from '~/pages/OrphanagesMap'
import OrphanageDetails from '~/pages/OrphanageDetails'

import SelectMapPosition from '~/pages/CreateOrphanages/SelectMapPosition'
import OrphanageData from '~/pages/CreateOrphanages/OrphanageData'

import Header from '~/components/Header'

export default function Routes() {
  const { colors } = useContext(ThemeContext)

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: colors.grayLight } }}>
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
        />

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />

        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }}
        />

        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
