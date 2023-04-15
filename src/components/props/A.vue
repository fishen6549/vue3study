<template>
    <div class="A">
        <button @click="emitB">派发事件给B</button>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import Bus from '../../Bus'
// const emit = defineEmits(['on-click'])
let flag = false;
const emitB = () => {
    flag = !flag;
    // emit('on-click', flag)
    Bus.emit('on-click', flag)
}
</script>

<style>
.A {
    width: 200px;
    height: 200px;
    background-color: pink;
}
</style>