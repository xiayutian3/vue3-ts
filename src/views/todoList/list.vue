<template>
  <ul class="todo-main">
    <!-- <li>
      <label>
        <input type="checkbox" />
        <span>yyyy</span>
      </label>
      <button class="btn btn-danger" style="display: none">删除</button>
    </li> -->

    <Item v-for="(item,index) in todos" :key="item.id" :todo="item" :index="index" :handleCompleted="handleCompleted" :deleteTodo="deleteTodo"/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Item from './item.vue'
export default defineComponent({
  name: 'list',
  props: ['todos', 'handleCompleted', 'deleteTodo'],
  components: {
    Item
  },
  setup () {
    return {}
  }
})
</script>
<style lang="scss">
.list {
}
</style>
