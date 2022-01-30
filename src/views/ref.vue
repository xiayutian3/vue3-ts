<template>
  <div class="wrapper">
    <h3>ref的另一个作用:获取页面的元素</h3>
    <input type="text" ref="inputRef">
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: '',
  props: {},
  setup () {
    const inputRef = ref<HTMLElement | null>(null)
    onMounted(() => {
      inputRef.value && inputRef.value.focus() // 自动获取焦点
    })
    return {
      inputRef
    }
  }
})
</script>
<style lang="scss">
.wrapper{}
</style>
