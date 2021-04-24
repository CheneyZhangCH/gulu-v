<template>
  <button v-bind="$attrs">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  name: 'Button',
  setup(props, context) {
    console.log(props)
    console.log(context.attrs)
    const { size, onClick, onFocus, onMouseenter } = context.attrs
    console.log(size)
    console.log(onClick)
    console.log(onFocus)
    console.log(onMouseenter)
  }
}
</script>

<style lang="scss" scoped>

</style>
