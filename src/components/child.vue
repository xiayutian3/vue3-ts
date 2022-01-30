<template>
  <div class="wrapper">
    children
    <div>{{msg}}</div>

     <input type="button" @click="hangdleClick" value="分发事件">
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: '',
  props: {
    msg: {
      type: String as PropType<string>, // 变成ts中的类型
      default: ''
    }
  },
  setup (props, context) {
    const hangdleClick = () => {
      context.emit('xxx', '++')
    }
    return {
      hangdleClick
    }
  }
})
</script>
<style lang="scss">
.wrapper{}
</style>
