<template>
  <div class="wrapper">
    <h2>计算属性和监视</h2>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input type="text" v-model="firstName" /><br />
      名字：<input type="text" v-model="lastName"/><br />
    </fieldset>
        <fieldset>
      <legend>计算属性和监视的演示</legend>
      姓氏：<input type="text" v-model="fullname1"/><br />
      姓氏：<input type="text" v-model="fullname2"/><br />
      姓氏：<input type="text" v-model="fullname3"/><br />
    </fieldset>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs, watch, watchEffect } from 'vue'
export default defineComponent({
  name: '',
  props: {},
  setup () {
    const user = reactive({
      firstName: '东方',
      lastName: '不败'
    })
    // 第一个，姓名
    // 只有一个回调 表示get
    // 返回的是ref类型的数据
    const fullname1 = computed(() => {
      return user.firstName + '_' + user.lastName
    })
    // console.log('fullname: ', fullname)

    // 第二个，姓名
    const fullname2 = computed({
      get () {
        return user.firstName + '_' + user.lastName
      },
      set (value:string) {
        const names = value.split('_')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    // 第三个，姓名
    // 监视--指定数据   -----watch
    const fullname3 = ref('')
    watch(user, ({ firstName, lastName }) => {
      fullname3.value = firstName + '_' + lastName
      // immediate默认是开始执行一次，deep深度监视
    }, { immediate: true, deep: true })

    // 监视，不需要配置immediate，本身默认就会进行监视，（默认执行一次）---- watchEffect
    // watchEffect(() => {
    //   fullname3.value = user.firstName + '_' + user.lastName
    // })

    watchEffect(() => {
      const names = fullname3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })

    // watch----监视多个响应式数据
    // watch([user.lastName, user.lastName, fullname3], () => {
    //   // 这里的user.lastName, user.lastName 不是响应式数据，所以回调不会执行，（user是响应式数据，user.lastname不是响应式数据）
    //   // fullname3是响应式数据，所以监视了，回调会执行
    //   console.log('====')
    // })

    // 非要监视 非响应式数据的话，代码需要调整一下
    watch([() => user.lastName, () => user.lastName], () => {
      console.log('====')
    })

    return {
      ...toRefs(user),
      fullname1,
      fullname2,
      fullname3
    }
  }
})
</script>
<style lang="scss">
.wrapper{}
</style>
