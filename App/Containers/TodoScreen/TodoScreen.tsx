import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

// Navigation
import { HomeTabsCompositeNavigationProps } from '@/Navigation/AppNavigation'

// Themes
import styles from './Styles/TodoScreenStyles'

const TodoScreen = () => {
  const navigation = useNavigation<HomeTabsCompositeNavigationProps>()

  const handleNavigateToProfileScreen = () => {
    navigation.navigate('ProfileScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleNavigateToProfileScreen}>TodoScreen</Text>
    </SafeAreaView>
  )
}

export default TodoScreen
