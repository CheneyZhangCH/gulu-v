<template>
    <router-view/>
</template>

<script lang="ts">
import { provide, ref, reactive } from 'vue'
import router from './router'

export default {
    name: 'App',
    setup() {
        const clientWidth = document.documentElement.clientWidth
        const menuVisible = ref(clientWidth >= 500)
        provide('menuVisible', menuVisible)
        router.afterEach(() => {
            if ( document.documentElement.clientWidth <= 500) {
                menuVisible.value = false
            }
        })
    },
}
</script>
