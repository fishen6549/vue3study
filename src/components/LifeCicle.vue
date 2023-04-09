<template>
    <div>
        <h1>生命周期</h1>
        <div ref="div">{{ str }}</div>
        <button @click="change">change</button>
    </div>
</template>

<script setup lang="ts">

import { getCurrentInstance, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue';
const instance = getCurrentInstance();
console.log(instance);
// setup 语法糖模式下 是没有 beforeCreate created 这两个生命周期的 setup去代替
// onBeforeMount读取不到dom onMounted可以
// onBeforeUpdate获取的是更新之前的dom onUpdated获取的是更新完成的dom
console.log("setup");
const str = ref<string>("tom");
const div = ref<HTMLDivElement>();
const change = () => {
    str.value = 'jerry';
}
// 创建之前 
onBeforeMount(() => {
    console.log("onBeforeMount", div.value); //创建之前读取不到dom
    console.log("onBeforeMount");
});
//创建完成
onMounted(() => {
    console.log("onMounted", div.value); // 可以
    console.log("onMounted");

})
// 更新组件之前
onBeforeUpdate(() => {
    console.log("onBeforeUpdate", div.value?.innerText);
})
// 更新完成
onUpdated(() => {
    console.log("onUpdated", div.value?.innerText);
})
// 销毁之前
onBeforeUnmount(() => {
    console.log("onBeforeUnmount");
})

// 销毁完成
onUnmounted(() => {
    console.log("onUnmounted");
})
//下面两个主要用来调试  收集依赖和触发
onRenderTracked((e) => {
    console.log("onRenderTracked", e);
})

onRenderTriggered((e) => {
    console.log("onRenderTriggered", e);
})

</script>

<style scoped></style>