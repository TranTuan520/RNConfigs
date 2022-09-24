import React from 'react'
import {
  CompositeNavigationProp,
  NavigationContainer
} from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'
import {
  BottomTabBarProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'

// Containers
import { HomeScreen } from '@/Containers/HomeScreen'
import { TodoScreen } from '@/Containers/TodoScreen'
import { AddTodoScreen } from '@/Containers/AddTodoScreen'
import { ProfileScreen } from '@/Containers/ProfileScreen'
import { SignInScreen } from '@/Containers/SignInScreen'
import { CHomeTabs } from '@/Components/HomeTabs'

export type AppStackParams = {
  HomeTabs: undefined
  AddTodoScreen: undefined
  ProfileScreen: undefined
}

export type AuthStackParams = {
  SignInScreen: undefined
}

export type HomeTabsParams = {
  HomeScreen: undefined
  TodoScreen: undefined
}

export type HomeTabsCompositeNavigationProps = CompositeNavigationProp<
  StackNavigationProp<HomeTabsParams>,
  StackNavigationProp<AppStackParams>
>

const RootStack = createStackNavigator()
const AppStack = createStackNavigator<AppStackParams>()
const AuthStack = createStackNavigator<AuthStackParams>()
const HomeTab = createBottomTabNavigator<HomeTabsParams>()

const AuthStacks = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={'SignInScreen'} component={SignInScreen} />
    </AuthStack.Navigator>
  )
}

const HomeTabs = () => {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props: BottomTabBarProps) => <CHomeTabs {...props} />}
    >
      <HomeTab.Screen name={'HomeScreen'} component={HomeScreen} />
      <HomeTab.Screen name={'TodoScreen'} component={TodoScreen} />
    </HomeTab.Navigator>
  )
}

const AppStacks = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AppStack.Screen name={'HomeTabs'} component={HomeTabs} />
      <AppStack.Screen name={'AddTodoScreen'} component={AddTodoScreen} />
      <AppStack.Screen name={'ProfileScreen'} component={ProfileScreen} />
    </AppStack.Navigator>
  )
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <RootStack.Screen name={'AppStack'} component={AppStacks} />
        <RootStack.Screen name={'AuthStacks'} component={AuthStacks} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
