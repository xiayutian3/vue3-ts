<template>
  <div class="wrapper">
    <h2>自定义vue hook</h2>
    <div>x:{{ x }} y:{{ y }}</div>
    <h3 v-if="loading">正在加载中...</h3>
    <h3 v-else-if="errorMsg">错误信息:{{ errorMsg }}</h3>
    <!-- 数据是对象的情况 -->
    <!-- <ul v-else>
      <li>id:{{data.id}}</li>
      <li>address:{{data.address}}</li>
      <li>distance:{{data.distance}}</li>
    </ul> -->
    <!-- 数组情况 -->
    <ul v-for="item in data" :key="item.id">
      <li>id:{{ item.id }}</li>
      <li>title:{{ item.title }}</li>
      <li>price:{{ item.price }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import useMountPointFn from './hooks/useMousePosition'
import useRequest from './hooks/useRequest'

// 定义接口
interface IaddressData {
  id: number;
  address: string;
  distance: string;
}
interface Product {
  id: string;
  title: string;
  price: number;
}

export default defineComponent({
  name: '',
  props: {},
  setup () {
    // const x = ref(0)
    // const y = ref(0)
    // // 点击事件
    // const clickHandle = (event:MouseEvent) => {
    //   x.value = event.pageX
    //   y.value = event.pageY
    // }
    // onMounted(() => {
    //   window.addEventListener('click', clickHandle)
    // })
    // onBeforeMount(() => {
    //   window.removeEventListener('click', clickHandle)
    // })
    // return {
    //   x, y
    // }

    // --------------------------------------------------------
    /// 使用hook
    const obj = useMountPointFn()
    // const { loading, data, errorMsg } = useRequest<IaddressData>('/data/address.json')
    const { loading, data, errorMsg } = useRequest<Product[]>('/data/products.json')

    // 监视
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length)
      }
    })
    return {
      ...obj,
      loading,
      data,
      errorMsg
    }
  }
})
</script>
<style lang="scss">
.wrapper {
}
</style>
