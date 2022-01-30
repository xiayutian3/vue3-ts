<template>
  <div class="wrapper">
    <h3>{{title}}</h3>
    <div>{{arr}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'test',
  props: {},
  setup () {
    const state = reactive({
      title: 'hi',
      arr: [1, 2, 3]
    })
    setTimeout(() => {
      state.arr[1] = 78
    }, 2000)
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style lang="scss">
.wrapper{}
</style>
