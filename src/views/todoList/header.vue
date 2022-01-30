<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'toheader',
  props: {},
  setup () {
    return {}
  }
})
</script>
<style lang="scss">
.header {
}
</style>
