<template>
    <div>导航 | <router-link to="/">Home</router-link> | <router-link to="hello-world">HelloWorld</router-link></div>
    <hr>
    <router-view/>
</template>

<script>
export default {
    name: 'App',
}
</script>
