import { ref } from 'vue'
import axios from 'axios'
/// 发送axios请求
export default function <T> (url:string) {
  // 加载状态
  const loading = ref(true)
  // 数据(泛型,可能是对象,数组,null)
  const data = ref<T | null>(null)
  // 错误消息
  const errorMsg = ref('')

  // 发送请求
  axios.get(url).then(response => {
    loading.value = false
    data.value = response.data
  }).catch(error => {
    loading.value = false
    errorMsg.value = error.message || '未知错误'
  })

  return {
    loading,
    data,
    errorMsg
  }
}
