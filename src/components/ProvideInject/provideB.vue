<template>
    <h1>provideB子级别</h1>
    <button @click="change">修改provide值</button>
    <div class="box">

    </div>
    <hr>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
const color = inject<Ref<string>>('color')
const change = () => {
    // color?.value = 'cyan';
    color!.value = 'cyan';
}
</script>

<style  scoped>
.box {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    background-color: v-bind(color);
}
</style>