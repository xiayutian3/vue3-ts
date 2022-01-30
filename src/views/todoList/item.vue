<template>
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)" :style="{backgroundColor:bgColor,color:myColor}">
    <label>
      <input type="checkbox" :checked="todo.isCompleted" @input="handleClick"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteFn">删除</button>
  </li>
</template>

<script lang="ts">
import { Todo } from '@/types/todo'
import { defineComponent, PropType, ref } from 'vue'
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
    },
    deleteTodo: {
      type: Function,
      required: true
    }

  },
  setup (props) {
    const handleClick = () => {
      props.handleCompleted(props.index)
    }

    const bgColor = ref('white')
    const myColor = ref('black')
    const isShow = ref(false)
    // 鼠标移入移出
    const mouseHandler = (flag:boolean) => {
      if (flag) {
        bgColor.value = 'pink'
        myColor.value = 'green'
        isShow.value = true
      } else {
        bgColor.value = 'white'
        myColor.value = 'black'
        isShow.value = false
      }
    }
    // 删除方法
    const deleteFn = () => {
      if (window.confirm('确定要删除吗?')) { props.deleteTodo(props.index) }
    }
    return {
      handleClick,
      mouseHandler,
      bgColor,
      myColor,
      isShow,
      deleteFn
    }
  }
})
</script>
<style lang="scss">
.item {
}
</style>
