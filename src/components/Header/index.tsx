import React, { useContext } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { ThemeContext } from 'styled-components/native'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  View,
  Text,
} from './styles'

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
  const { colors } = useContext(ThemeContext)
  const navigation = useNavigation()

  function handleGoBackToAppHome() {
    navigation.navigate('OrphanagesMap')
  }

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color={colors.secondary} />
      </BorderlessButton>

      <Text color="blueMediumLight">{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHome}>
          <Feather name="x" size={24} color={colors.redLight} />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </Container>
  )
}
