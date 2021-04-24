<template>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import { ref } from 'vue'

export default {
  components: {
    Button,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>

</style>
