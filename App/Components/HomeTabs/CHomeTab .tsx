import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Components
import { CButton } from '../Buttons'

// Themes
import { AppStyles, Colors, Images, Normalize } from '@/Themes'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

const CHomeTabs = (props: BottomTabBarProps) => {
  const { state, navigation } = props

  const { bottom } = useSafeAreaInsets()

  const onPressBottomButton = (index: number) => () => {
    switch (index) {
      case 0:
        navigation.navigate('HomeScreen')
        break
      case 1:
        navigation.navigate('TodoScreen')
    }
  }

  return (
    <View
      style={{
        paddingBottom: bottom,
        ...styles.container
      }}
    >
      <CButton
        disabled={state.index !== 0}
        disabledStyle={styles.inActiveTabBarButton}
        icon={Images.ic_home}
        title={'Home'}
        iconStyles={styles.tabBarActiveButtonIcon}
        titleStyle={styles.tabBarActiveButtonTitle}
        onPress={onPressBottomButton(0)}
      />
      <CButton
        disabled={state.index !== 1}
        disabledStyle={styles.inActiveTabBarButton}
        icon={Images.ic_task_list}
        title={'Todo'}
        iconStyles={styles.tabBarActiveButtonIcon}
        onPress={onPressBottomButton(1)}
        titleStyle={styles.tabBarActiveButtonTitle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: Normalize(12),
    paddingTop: Normalize(6),
    borderRadius: Normalize(6),
    backgroundColor: Colors.meteorite,
    ...AppStyles.shadow
  },
  tabBarActiveButtonIcon: {
    tintColor: Colors.white
  },
  tabBarActiveButtonTitle: {
    color: Colors.white
  },
  inActiveTabBarButton: {
    opacity: 0.5
  }
})

export default CHomeTabs
