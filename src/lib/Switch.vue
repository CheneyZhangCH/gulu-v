<template>
    <button :class="{checked: value}" @click="toggle"><span/></button>
</template>

<script lang="ts">
export default {
    name: 'Switch',
    props: {
        value: Boolean,
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return {
            toggle,
        }
    },
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
    height: $h;
    width: $h*2;
    border: none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    &.checked {
        background: blue;
        > span {
            left: calc(100% - #{$h} + 2px);
        }
    }
}
span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
}
button:focus {
    outline: none;
}
</style>
