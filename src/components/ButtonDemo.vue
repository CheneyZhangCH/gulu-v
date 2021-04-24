<template>
  <div>Switch 文档</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick" @focus="onFocus" @mouseenter="onMouseEnter">按钮</Button>
    <Button theme="button" @click="onClick" @focus="onFocus" @mouseenter="onMouseEnter">按钮</Button>
    <Button theme="text" @click="onClick" @focus="onFocus" @mouseenter="onMouseEnter">文字</Button>
    <Button theme="link" @click="onClick" @focus="onFocus" @mouseenter="onMouseEnter">链接</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log('onClick')
    }
    const onFocus = () => {
      console.log('onFocus')
    }
    const onMouseEnter = () => {
      console.log('onMouseEnter')
    }
    return {
      onClick,
      onFocus,
      onMouseEnter,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
