<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="(item, index) in data">
                <slot :data="item" :index="index"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
type names = {
    name: string,
    age: number
}

const data = reactive<names[]>([
    {
        name: 'tom1',
        age: 18
    },
    {
        name: 'tom2',
        age: 18
    },
    {
        name: 'tom3',
        age: 18
    },
    {
        name: 'tom4',
        age: 18
    },
])
</script>

<style lang="less" scoped>
.header {
    height: 50px;
    background-color: pink;
}

.main {
    height: 50px;
    background-color: skyblue;
}

.footer {
    height: 50px;
    background-color: cyan;
}
</style>