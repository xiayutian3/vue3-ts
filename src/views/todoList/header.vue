<template>
  <div class="todo-header">
    <input type="text" v-model="title" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="enterFn" />
  </div>
</template>

<script lang="ts">
import { Todo } from '@/types/todo'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'toheader',
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    const title = ref('')
    const enterFn = () => {
      if (!title.value) return
      const obj:Todo = {
        id: Date.now(),
        title: title.value.trim(),
        isCompleted: false
      }
      // 加入列表
      props.addTodo(obj)
      // 清空文本框
      title.value = ''
    }
    return {
      title,
      enterFn
    }
  }
})
</script>
<style lang="scss">
.header {
}
</style>
