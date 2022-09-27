import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

// Types
import { Todo, TodoState } from '@/Types/Todo'

const INITIAL_STATE: TodoState = {
  todoList: [],

  fetchingAddTodo: false,
  errorAddTodo: null,

  fetchingRemoveTodo: false,
  errorRemoveTodo: null
}

const todoSlide = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    addTodoRequest: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload)
    },
    removeTodoRequest: (state: TodoState, action: PayloadAction<Todo>) => {
      state.todoList.filter((todo) => todo.id !== action.payload.id)
    }
  }
})

export const { addTodoRequest, removeTodoRequest } = todoSlide.actions
export default todoSlide.reducer
