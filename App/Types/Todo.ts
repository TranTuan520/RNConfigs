export type Todo = {
  id: string
  name: string
  description: string
}

export interface TodoState {
  todoList: Todo[]

  fetchingAddTodo: boolean
  errorAddTodo: string | null

  fetchingRemoveTodo: boolean
  errorRemoveTodo: string | null
}
