<template>
  <button class="gulu-button" :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  // inheritAttrs: false,
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button',
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
