<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck" />
    </label>
    <span> <span>已完成{{count}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script lang="ts">
import { Todo } from '@/types/todo'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'tofooter',
  props: {
    todos: {
      type: Array as ()=> Todo[], // 类型
      default: () => []
    },
    checkboxAll: {
      type: Function,
      required: true
    },
    clearAllCompletedTodos: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    const count = computed(() => {
      return props.todos.filter(item => item.isCompleted).length
    })

    // 全选/全不选
    const isCheck = computed({
      get () {
        return count.value > 0 && count.value === props.todos.length
      },
      set (val) {
        // console.log('val: ', val)
        props.checkboxAll(val)
      }
    })

    // 清楚选中数据
    const clear = () => {
      props.clearAllCompletedTodos()
    }

    return {
      count,
      isCheck,
      clear
    }
  }
})
</script>
<style lang="scss">
.footer {
}
</style>
