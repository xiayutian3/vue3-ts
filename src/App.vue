<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :handleCompleted="handleCompleted" :deleteTodo="deleteTodo"/>
      <Footer :todos="todos" :checkboxAll="checkboxAll" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Header from './views/todoList/header.vue'
import List from './views/todoList/list.vue'
import Footer from './views/todoList/footer.vue'

import { Todo } from './types/todo'

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
        {
          id: 1,
          title: '奔驰',
          isCompleted: false
        },
        {
          id: 2,
          title: '宝马',
          isCompleted: true
        },
        {
          id: 3,
          title: '奥迪',
          isCompleted: false
        }
      ]
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

    return {
      ...toRefs(state),
      handleCompleted,
      addTodo,
      deleteTodo,
      checkboxAll
    }
  }
})
</script>

<style lang="scss">
</style>
