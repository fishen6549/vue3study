<template>
    <div>
        <input id="watchInput" v-model="message1" type="text">
        <input v-model="message2" type="text">
        <button @click="stopWatch">停止监听</button>
    </div>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue';
let message1 = ref<string>('裤子111');
let message2 = ref<string>('裤子');
// 写在里面的都会被监听到 返回值可以停止监听
// 配置项 flush:pre 组件更新前执行 sync 强制效果始终同步触发 post 组件更新后执行
// const stop = watchEffect((oninvalidate) => {
//     console.log("message1", message1.value);
//     console.log("message2", message2.value);
//     oninvalidate(() => {
//         console.log("before");
//     });
// })
const stop = watchEffect((oninvalidate) => {
    // console.log("message1", message1.value);
    // console.log("message2", message2.value);
    const input: HTMLInputElement = document.querySelector("#watchInput") as HTMLInputElement;
    console.log("#watchInput", input);

    oninvalidate(() => {
        console.log("before");
    });
}, {
    flush: "post",
    onTrigger(e){ // 开发模式下调试工具
        // debugger
    }
})

const stopWatch = () => stop();
</script>

<style></style>