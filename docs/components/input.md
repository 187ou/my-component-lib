# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单控件。

## 基础用法

:::demo
```vue
<template>
  <my-input v-model="value" placeholder="请输入内容"></my-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

:::demo
<template>
  <my-input v-model="value1" size="large" placeholder="大号输入框"></my-input>
  <br /><br />
  <my-input v-model="value2" size="medium" placeholder="中号输入框"></my-input>
  <br /><br />
  <my-input v-model="value3" size="small" placeholder="小号输入框"></my-input>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script> 

:::demo
<template>
  <my-input v-model="value" disabled placeholder="禁用输入框"></my-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('禁用内容')
</script>

:::demo
<template>
  <my-input v-model="value" clearable placeholder="可清空输入框"></my-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('可清空内容')
</script>

:::demo
<template>
  <my-input v-model="value" placeholder="带前缀图标">
    <template #prefix>🔍</template>
  </my-input>
  <br /><br />
  <my-input v-model="value" placeholder="带后缀图标">
    <template #suffix>📅</template>
  </my-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

:::demo
<template>
  <my-input v-model="value" error placeholder="错误输入框"></my-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('错误内容')
</script>

:::demo
Props
参数	说明	类型	可选值	默认值
modelValue	绑定值	string / number	—	—
type	输入框类型	string	text / password / number 等	text
size	尺寸	string	large / medium / small	medium
placeholder	占位符	string	—	—
disabled	是否禁用	boolean	—	false
readonly	是否只读	boolean	—	false
clearable	是否可清空	boolean	—	false
error	是否错误状态	boolean	—	false

Events
事件名	说明	回调参数
update:modelValue	绑定值变化时触发	(value: string | number)
input	输入时触发	(value: string | number)
change	失焦或回车时触发	(value: string | number)
focus	获得焦点时触发	(event: FocusEvent)
blur	失去焦点时触发	(event: FocusEvent)

Slots
名称	说明
prefix	输入框前缀内容
suffix	输入框后缀内容
