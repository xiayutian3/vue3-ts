<template>
  <div class="wrapper">
    <h2>shallowReactive and shallowRef</h2>
    <h3>m1:{{m1}}</h3>
    <h3>m2:{{m2}}</h3>
    <h3>m3:{{m3}}</h3>
    <h3>m4:{{m4}}</h3>
    <button @click="update">更新数据</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue'
export default defineComponent({
  name: '',
  props: {},
  setup () {
    // 深度响应式数据
    const m1 = reactive({
      name: '名人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    // 浅响应式
    const m2 = shallowReactive({
      name: '名人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    // 深度响应式数据
    const m3 = ref({
      name: '名人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })
    // 浅响应式 ,只针对 value  不针对对象
    const m4 = shallowRef({
      name: '名人',
      age: 20,
      car: {
        name: '奔驰',
        color: 'red'
      }
    })

    const update = () => {
      // 修改m1

      // 修改m2
      // 修改m3
      // 修改m4
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update
    }
  }
})
</script>
<style lang="scss">
.wrapper{}
</style>
