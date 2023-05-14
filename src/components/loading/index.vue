<template>
    <div v-if="isShow" class="loading">
        Loading...
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
const isShow = ref<boolean>(false);

const show = () => isShow.value = true;
const hide = () => isShow.value = false;

// 抛出方法和变量
defineExpose({
    isShow, show, hide
})
</script>

<style scoped>
.loading {
    background: black;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}
</style>