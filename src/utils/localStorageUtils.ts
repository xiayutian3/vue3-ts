import { Todo } from '@/types/todo'

// 存数据
export function saveTodos (todos: Todo[]):void {
  localStorage.setItem('todos_key', JSON.stringify(todos))
}
// 读数据
export function readTodos ():Todo[] {
  return JSON.parse(localStorage.getItem('todos_key') || '[]')
}
