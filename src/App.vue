<template>
    <router-view/>
</template>

<script lang="ts">
import { provide, ref, reactive } from 'vue'

export default {
    name: 'App',
    setup() {
        const clientWidth = document.documentElement.clientWidth
        const menuVisible = ref(clientWidth >= 500)
        provide('menuVisible', menuVisible)
    },
}
</script>
