<template>
    <div class="top-nav">
        <span class="toggleAside" @click="toggleMenu"><i class="iconfont icon-toggle"/></span>
        <div class="logo">Logo</div>
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
    justify-content: center;
    align-items: center;
    height: 54px;
    padding: 0 16px;
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
    > .toggleAside {
        display: none;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 500px) {
        > .menu {
            display: none;
        }
        > .logo {
            margin: 0 auto;
        }
        > .toggleAside {
            display: inline-flex;
        }
    }
}
</style>
