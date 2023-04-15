<template>
    <div>
        <!-- <button @click="flag = !flag">click</button> -->
        <!-- <transition name="fade"> -->
        <!-- <transition enter-from-class="fade-enter-from" enter-active-class="fade-enter-active" enter-to-class="fade-enter-to">
            <div v-if="flag" class="content">
            </div>
        </transition> -->
        <!-- <transition @before-enter="EnterFrom" @enter="EnterActive" @leave="Leave"> -->
        <!-- <transition appear appear-from-class="fade-enter-from" appear-active-class="fade-enter-active"
            appear-to-class="fade-enter-to">
            <div v-if="flag" class="content">
            </div>
        </transition> -->
        <!-- <button @click="add">ADD</button>
        <button @click="pop">POP</button>
        <div class="wrapper">
            <transition-group enter-active-class="animate__animated animate__bounceIn"
                leave-active-class="animate__animated animate__hinge">
                <div class="item" :key="item" v-for="item in list">{{ item }}</div>
            </transition-group>
        </div> -->
        <button @click="random">random</button>
        <transition-group move-class="mmm" class="wrapper2" tag="wrapper2">
            <div class="item" :key="item.id" v-for="item in list">{{ item.number }}</div>
        </transition-group>

        <!-- 状态过渡 -->
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import 'animate.css'
import _ from "lodash"
// import gsap from "gsap";
const flag = ref<boolean>(true);
// const EnterFrom = (el: Element, done: gsap.Callback) => {
//     gsap.set(el, {
//         width: 0,
//         height: 0
//     })
// }
// const EnterActive = (el: Element, done: gsap.Callback) => {
//     gsap.to(el, {
//         width: 200,
//         height: 200,
//         onComplete: done
//     })

// }
// const Leave = (el: Element, done: gsap.Callback) => {
//     gsap.to(el, {
//         width: 0,
//         height: 0,
//         onComplete: done
//     })
// }

// const list = reactive<number[]>([1, 2, 3, 4, 5, 6]);
// const add = () => {
//     list.push(list.length + 1)
// }
// const pop = () => {
//     list.pop()
// }

const list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return { id: index, number: (index % 9) + 1 }
}))

// console.log("list", list.value);
const random = () => {
    list.value = _.shuffle(list.value);
}

</script>

<style lang="less" scoped>
.content {
    width: 200px;
    height: 200px;
    background-color: pink;
}

.fade-enter-from {
    width: 0;
    height: 0;
}

.fade-enter-active {
    transition: all 20s ease;
}

.fade-enter-to {
    width: 200px;
    height: 200px;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid black;

    .item {
        margin: 10px;
        font-size: 30px;
    }
}

.wrapper2 {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 10 + 9px);

    .item {
        width: 25px;
        height: 25px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.mmm {
    transition: all .5s;
}
</style>