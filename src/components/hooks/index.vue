<template>
    <div class="A">
        A组件
    </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';

const attr = useAttrs();
console.log("attr", attr);
</script>

<style scoped>
.A {
    width: 200px;
    height: 200px;
    background-color: pink;
}
</style>