<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isCompleted" @input="handleClick"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" style="display: none">删除</button>
  </li>
</template>

<script lang="ts">
import { Todo } from '@/types/todo'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'item',
  props: {
    todo: {
      type: Object as ()=> Todo // 函数返回的是Todo类型
    },
    handleCompleted: {
      type: Function,
      required: true
    },
    index: {
      type: Number as PropType<number> // 返回ts中的类型
    }

  },
  setup (props) {
    const handleClick = () => {
      props.handleCompleted(props.index)
    }
    return {
      handleClick
    }
  }
})
</script>
<style lang="scss">
.item {
}
</style>
