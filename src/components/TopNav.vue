<template>
    <div class="top-nav">
        <div class="logo" @click="toggleMenu">Logo</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'

export default {
    name: 'topNav',
    setup() {
        const menuVisible = inject<Ref<Boolean>>('menuVisible')
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value
        }
        return {
            toggleMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.top-nav {
    position: relative;
    z-index: 10;
    background: pink;
    display: flex;
    padding: 16px;
    > .logo {
        max-width: 6em;
        margin-right: auto;
    }
    > .menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;
        > li {
            margin: 0 1em;
        }
    }
}
</style>
