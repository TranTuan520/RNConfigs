import React, { FC, ReactNode } from 'react'
import {
  Text,
  StyleSheet,
  ImageResolvedAssetSource,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Image
} from 'react-native'

// Themes
import { Normalize, AppStyles, Colors } from '@/Themes'

interface CButtonProps {
  title?: string
  icon?: ImageResolvedAssetSource
  onPress?: () => void
  disabled?: boolean
  style?: ViewStyle
  disabledStyle?: ViewStyle
  titleStyle?: TextStyle
  disabledTitleStyle?: TextStyle
  iconStyles?: ImageStyle
  disabledIconStyle?: ImageStyle
  children?: ReactNode
}

const CButton: FC<CButtonProps> = (props: CButtonProps) => {
  const {
    title,
    icon,
    iconStyles,
    disabledIconStyle,
    disabled,
    disabledStyle,
    onPress,
    style,
    disabledTitleStyle,
    titleStyle,
    children
  } = props
  return (
    <TouchableOpacity
      style={[styles.container, style, disabled && disabledStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {icon && (
        <Image
          source={icon}
          style={[
            styles.buttonAsset,
            iconStyles,
            disabled && disabledIconStyle
          ]}
        />
      )}
      {title && (
        <Text style={[titleStyle, disabled && disabledTitleStyle]}>
          {title}
        </Text>
      )}
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Normalize(2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonAsset: {
    width: Normalize(24),
    height: Normalize(24)
  }
})

export default CButton
