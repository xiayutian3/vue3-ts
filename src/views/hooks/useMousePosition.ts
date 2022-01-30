
// vue hook
import { onBeforeMount, onMounted, Ref, ref } from 'vue'
interface MountPoint {
  x: Ref<number>;
  y: Ref<number>;
}
export default function ():MountPoint {
  const x = ref(0)
  const y = ref(0)
  // 点击事件
  const clickHandle = (event:MouseEvent) => {
    x.value = event.pageX
    y.value = event.pageY
  }
  onMounted(() => {
    window.addEventListener('click', clickHandle)
  })
  onBeforeMount(() => {
    window.removeEventListener('click', clickHandle)
  })
  return {
    x, y
  }
}
