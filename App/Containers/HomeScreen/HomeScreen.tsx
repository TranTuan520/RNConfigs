import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Config from 'react-native-config'

// Redux
import { addTodoRequest, removeTodoRequest } from '@/Store/Todo'

// Hooks
import { useAppDispatch, useAppSelector } from '@/Hooks'

// Themes
import styles from './Styles/HomeScreenStyles'

const HomeScreen = () => {
  const dispatch = useAppDispatch()
  const { todoList } = useAppSelector((state) => state.todo)

  useEffect(() => {
    console.log(Config)
  }, [todoList])

  const handleAddTodo = () => {
    dispatch(
      addTodoRequest({
        id: new Date().getTime().toString(),
        description: `Todo_${new Date().getTime()}_Descriptions.....`,
        name: `Todo_${new Date().getTime()}`
      })
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleAddTodo}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
