<template>
    <h1>provideA父级别</h1>
    <div class="box">

    </div>
    <hr>
    <provideB></provideB>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
import provideB from './provideB.vue';
const color = inject<Ref<string>>('color')
</script>

<style scoped>
.box {
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    background-color: v-bind(color);
}
</style>