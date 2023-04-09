<template>
    <div class="layout">
        <Menu></Menu>
        <div class="main">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script setup lang="ts">
import Content from "./Content/index.vue"
import Header from "./Header/index.vue"
import Menu from "./Menu/index.vue"
</script>

<style lang="less" >
html,
body,
#app {
    height: 100%;
    overflow: hidden;
}

.layout {
    display: flex;
    height: 100%;

    .main {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>