<template>
    <div>Switch 文档</div>
    <Switch :value="y" @input="(event) => y = event"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'

export default {
    components: {
        Switch,
    },
    setup() {
        const y = ref(false)
        return { y }

    },

}
</script>

<style lang="scss" scoped>

</style>
