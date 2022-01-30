<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :handleCompleted="handleCompleted" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos" :checkboxAll="checkboxAll" :clearAllCompletedTodos="clearAllCompletedTodos" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import Header from './views/todoList/header.vue'
import List from './views/todoList/list.vue'
import Footer from './views/todoList/footer.vue'

import { Todo } from './types/todo'
import { saveTodos, readTodos } from '@/utils/localStorageUtils'

// // 定义接口约束数据
// interface Todo {
//   id: number;
//   title: string;
//   isCompleted: boolean;
// }

export default defineComponent({
  name: 'app',
  components: {
    Header,
    List,
    Footer
  },
  setup () {
    // 定义数据  泛型约束
    const state = reactive<{todos:Todo[]}>({
      todos: [
        // {
        //   id: 1,
        //   title: '奔驰',
        //   isCompleted: false
        // },
        // {
        //   id: 2,
        //   title: '宝马',
        //   isCompleted: true
        // },
        // {
        //   id: 3,
        //   title: '奥迪',
        //   isCompleted: false
        // }
      ]
    })

    // 刷新，从缓存读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = readTodos()
      }, 1000)
    })

    // 修改数据的状态
    const handleCompleted = (index: number) => {
      // console.log(123456)
      state.todos[index].isCompleted = !state.todos[index].isCompleted
    }
    // 添加数据的方法
    const addTodo = (todo:Todo) => {
      state.todos.unshift(todo)
    }
    // 删除数据的方法
    const deleteTodo = (index:number) => {
      state.todos.splice(index, 1)
    }
    // 设置所有的checkbox状态
    const checkboxAll = (val:boolean) => {
      state.todos.forEach(item => (item.isCompleted = val))
    }

    // 清理所有选中的数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter(item => !item.isCompleted)
    }

    // 监视数据变化，存储到本地缓存
    // 监视数据()=>state.todos，非响应式数据，user才是响应式数据，state.todos不是响应式数据
    // watch(() => state.todos, (value:Todo[]) => {
    //   // 数据变化，存储起来
    //   localStorage.setItem('todos_key', JSON.stringify(value))
    // }, { deep: true }) // 深层次监视

    // watch(
    //   () => state.todos,
    //   (value:Todo[]) => {
    //   // 数据变化，存储起来
    //     saveTodos(value)
    //   },
    //   { deep: true }) // 深层次监视

    // 优化函数
    watch(
      () => state.todos,
      saveTodos,
      { deep: true }) // 深层次监视

    return {
      ...toRefs(state),
      handleCompleted,
      addTodo,
      deleteTodo,
      checkboxAll,
      clearAllCompletedTodos
    }
  }
})
</script>

<style lang="scss">
</style>
