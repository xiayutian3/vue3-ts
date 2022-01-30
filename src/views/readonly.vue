<template>
  <div class="wrapper">
    <h2>readonly and shallowReadonly</h2>
    <div>{{state2}}</div>
    <button @click = "update">跟新数据</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from 'vue'
export default defineComponent({
  name: '',
  props: {},
  setup () {
    const state = reactive({
      name: '名人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    // 深度只读
    // const state2 = readonly(state)

    // 浅度只读
    const state2 = shallowReadonly(state)
    const update = () => {
      // state2.name += '==='
      state2.car.name += '==='
    }

    //
    return {
      state,
      state2,
      update
    }
  }
})
</script>
<style lang="scss">
.wrapper{}
</style>
