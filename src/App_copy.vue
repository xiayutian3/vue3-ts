<template>
  <div id="nav">
    我是父级组件
    <div>{{ msg }}</div>
    <input type="button" @click="hangdleClick" value="点击按钮" />
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <!-- <router-view/> -->
  <hr />
  <!-- <Child :msg="msg" @xxx="xxx"/> -->
  <!-- <watchAndComputed /> -->
  <!-- <vuehook/> -->
  <!-- <refcomp/> -->
  <readonly/>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// import Child from './components/child.vue'
// import watchAndComputed from './views/watchAndComputed.vue'
// import vuehook from './views/vuehook.vue'
// import refcomp from './views/ref.vue'
import readonly from './views/readonly.vue'

export default defineComponent({
  name: 'app',
  components: {
    // Child,
    // watchAndComputed,
    // vuehook,
    // refcomp,
    readonly
  },
  setup () {
    const msg = ref('融信')
    const hangdleClick = () => {
      msg.value += '123'
    }
    const xxx = (txt: string) => {
      msg.value += txt
    }

    return {
      msg,
      hangdleClick,
      xxx
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
