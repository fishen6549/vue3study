<template>
  <!-- <div v-html="a"></div>
  <div class="parent" @click="parent">
    <button @[event].stop="son">点击</button>
  </div>

  <div>
    <input v-model="inputValue" type="text">
    <div>{{ inputValue }}</div>
  </div> -->

  <!-- ref全家桶 -->
  <!-- <div>
    ref:{{ man1 }}
  </div>
  <div>
    shallowRef:{{ man2 }}
  </div>
  <div>
    customRef:{{ obj }}
  </div>

  <div class="mydom" ref="mydom">dom元素</div>

  <button @click="change">click</button> -->
  <!-- ref全家桶 -->
  <!-- reactive -->
  <!-- <div>
    <form>
      <input v-model="form.name" type="text">
      <br>
      <input v-model="form.age" type="text">
      <br>
      <button @click.prevent="submit">提交</button>
    </form>
    <hr>
    <ul>
      <li v-for="item in list">{{ item }}</li>
      <li v-for="item in list.arr">{{ item }}</li>
    </ul>
  </div> -->
  <!-- reactive -->

  <!-- toRef toRefs toRaw -->
  <!-- <div>{{ people }}</div>
  <hr>
  <div>
    toRef:{{ like }}
  </div>
  <div>
    <button @click="peopleChange">修改</button>
  </div> -->
  <!-- toRef toRefs toRaw -->
  <!-- computed 购物车案例 -->
  <!-- <ShopCart></ShopCart> -->
  <!-- computed 购物车案例 -->

  <!-- WatchEffect 开始-->
  <!-- <WatchEffect /> -->
  <!-- <watch-effect /> -->
  <!-- WatchEffect 结束 -->

  <!-- 生命周期开始 -->
  <!-- <LifeCicle v-if="lifeCicleFlag"></LifeCicle>
  <button @click="lifeCicleFlag = !lifeCicleFlag">创建-销毁</button> -->
  <!-- 生命周期结束 -->

  <!-- less开始 -->
  <!-- <Layout /> -->
  <!-- less结束 -->

  <!-- 全局组件 局部组件 递归组件 开始 -->
  <!-- <Card /> -->
  <!-- <Tree :data="treeData" /> -->
  <!-- 全局组件 局部组件 递归组件 结束 -->

  <!-- 动态组件 开始 -->
  <!-- <div style="display:flex">
    <div class="tabs" v-for="(item, index) in dynamicData" @click="changeTab(item, index)"
      :class="{ active: index === activeIndex }">
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component :is="comId"></component> -->
  <!-- 动态组件 结束 -->

  <!-- 插槽开始 -->
  <!-- <Dialog>
    <template v-slot:header>
      <div>
        插槽header
      </div>
    </template>
    <template v-slot="{ data }">
      <div>插槽main---{{ data.name }}---{{ data.age }}--{{ data }}</div>
    </template>
    <template v-slot:footer>
      <div>插槽footer</div>
    </template>
  </Dialog> -->
  <!-- 插槽结束 -->

  <!-- 异步组件 代码分包 suspense 开始 -->
  <!-- <Suspense>
    <template #default>
      <syncVue></syncVue>
    </template>

    <template #fallback>
      <loading></loading>
    </template>

  </Suspense> -->
  <!-- 异步组件 代码分包 suspense 结束 -->

  <!-- 动画组件 开始 -->
  <!-- <TransitionIndex></TransitionIndex> -->
  <!-- <transition-index></transition-index> -->
  <!-- 动画组件 结束 -->

  <!-- 依赖注入provide/inject 开始 组件级别传参 通过原型链实现 -->
  <!-- <h1>App.vue顶层组件</h1>
  <label>
    <input v-model="colorVal" value="pink" type="radio" name="color">
    粉色
  </label>
  <label>
    <input v-model="colorVal" value="skyblue" type="radio" name="color">
    天蓝色
  </label>
  <label>
    <input v-model="colorVal" value="red" type="radio" name="color">
    红色
  </label>
  <div class="box">
  </div>
  <hr>
  <provideA></provideA> -->
  <!-- 依赖注入provide/inject 结束 -->

  <!-- 组件传参/EventBus传参 开始 -->

  <!-- <A @on-click="getFlag"></A>
  <B :flag="Flag"></B> -->
  <!-- <A></A>
  <B></B> -->
  <!-- 组件传参/EventBus传参 结束 -->

  <!-- tsx开始 -->
  <!-- <Tom @on-click="getItem" name="tom"></Tom> -->
  <!-- tsx结束 -->

  <!-- v-model 开始 -->
  <!-- <div>
    <h1>App.vue父组件</h1>
    <div>
      <button @click="isShow = !isShow">开关</button>
      isShow: {{ isShow }}
      <br>
      text双向绑定:{{ text }}
      <hr> -->
  <!-- v3支持绑定多个v-model的用法 修饰符用法-->
  <!-- <vModelVue v-model="isShow" v-model:textVal.isTest="text"></vModelVue>
    </div>
  </div> -->
  <!-- v-model 结束 -->

  <!-- 自定义指令开始 -->

  <div>
    <button @click="flag = !flag">切换</button>
    <vDirective v-if="flag" v-move:test1.test2="{ background: 'cyan' }"></vDirective>
  </div>


  <!-- 自定义指令结束 -->
</template>

<script setup lang="ts">
// import ShopCart from './components/ShopCart.vue';
// import WatchEffect from './components/WatchEffect.vue';
// import LifeCicle from './components/LifeCicle.vue';
// import Layout from "./components/layout/index.vue"
// import Card from './components/Card.vue';
// import Tree from './components/Tree.vue';
// import A from './components/dynamic/A.vue';
// import B from './components/dynamic/B.vue';
// import C from './components/dynamic/C.vue';
// import Dialog from "./components/slot/Dialog/index.vue"
// import Tom from './App'
import TransitionIndex from "./components/transition/index.vue"
// import TransitionIndex from "./components/transition/index.vue"
import loading from "./components/suspense/loading.vue";
import sync from "./components/suspense/sync.vue";
import provideA from "./components/ProvideInject/provideA.vue";
import A from "./components/props/A.vue";
import B from "./components/props/B.vue";
import vModelVue from "./components/vmodel/index.vue"
import vDirective from "./components/directive/index.vue"
import { Directive, provide, defineAsyncComponent, ref, shallowRef, triggerRef, customRef, reactive, toRef, toRefs, toRaw, markRaw, readonly, isShallow, DirectiveBinding } from 'vue';
import type { Ref } from 'vue';
// const a: string = "<span style='color:red'>我是一段文字</span>"

// const event: string = 'click';
// const son = (e: PointerEvent) => {
//   console.log('点击son');
// }
// const parent = (e: any) => {
//   console.log('点击parent');
// }

// const inputValue = ref('potato');

// ref全家桶
// ref深层次 shallowRef浅层次 triggerRef强制更新收集的依赖 customRef自定义ref
// 后面三个用的不多 ref还可以获取dom元素
// type M = {
//   name: string
// }

// function MyRef<T>(value: T) {
//   return customRef((track, trigger) => {
//     return {
//       get() {
//         track();
//         return value;
//       },
//       set(newVal) {
//         value = newVal;
//         trigger();
//       }
//     }
//   })
// }

// const mydom = ref<HTMLDivElement>();
// console.log(mydom);

// const man = ref<M>({ name: "banana" });
// const man1 = ref({ name: "banana1" });
// const man2 = shallowRef({ name: "banana2" });
// const obj = MyRef<string>("banana MyRef")
// const change = () => {
// man1.value.name = 'potato';
// console.log(man1);
// man2.value.name = 'potato222'; //无效 shallowRef只更新到value
// man2.value = {name:"potato222"}; //有效 shallowRef只更新到value
// man2.value.name = '我被影响了'; //triggerRef 强制更新依赖
// triggerRef(man2);
// console.log(man2);

// obj.value = 'customRef banana MyRef';
// console.log(mydom.value, mydom.value?.innerText);
// }
// ref全家桶结束

//reactive开始
// ref支持所有类型 reactive 引用类型 array object map set
// ref取值和赋值都要.value去设置 reactive 不需要
// reactive 不能直接赋值 会破坏Proxy响应对象
// 解决方案数组可以使用push 加解构添加 或者 添加一个对象 把数组当作属性解决
type N = {
  name: string,
  age: number
}
let form = reactive<N>({
  name: "banana",
  age: 18
})

// let list = reactive<string[]>([]);
let list = reactive<{ arr: string[] }>({
  arr: []
});

const submit = () => {
  // console.log(form);
  setTimeout(() => {
    let data = ['111', '222', '333']
    // list.push(...data);

    // list = data;// 无效
    list.arr = data;

    console.log(list);

  }, 500);
}
// form.age = 88;
//reactive结束

// toRefs toRaw 开始
// oRef 只对响应式变化的对象有效果 无论使用原响应式数据还是toRef引用的数据都保持响应式
// const people = { name: "tom", age: 18, like: 'sleep' }
// 当对象不需要响应式的时候 使用toRaw来脱离响应式
const people = reactive({ name: "tom", age: 18, like: 'sleep' });
const like = toRef(people, 'like');
const peopleChange = () => {
  // people.like = 'run';
  like.value = 'run';
  console.log(people);
}
// oRef toRefs toRaw 结束

// 生命周期开始
const lifeCicleFlag = ref<Boolean>(true);
// 生命周期结束

// 全局组件 局部组件 递归组件 开始
// interface Tree {
//   name: string,
//   checked: boolean,
//   children?: Tree[]
// }

// const treeData = reactive<Tree[]>(
//   [
//     {
//       name: "1",
//       checked: false,
//       children: [
//         {
//           name: '1-1',
//           checked: false
//         },
//         {
//           name: '1-2',
//           checked: true
//         }
//       ]
//     },
//     {
//       name: "2",
//       checked: false
//     },
//     {
//       name: "3",
//       checked: false,
//       children: [
//         {
//           name: '3-1',
//           checked: false,
//           children: [
//             {
//               name: '3-1-1',
//               checked: false
//             },
//             {
//               name: '3-1-2',
//               checked: false
//             },
//           ]
//         }
//       ]
//     },
//   ]
// );
// 全局组件 局部组件 递归组件 结束

// 动态组件开始
// const dynamicData = reactive([
//   { name: "A组件", com: markRaw(A) },
//   { name: "B组件", com: markRaw(B) },
//   { name: "C组件", com: markRaw(C) },
// ])

// // const comId = ref(A);
// const comId = shallowRef(A);

// const activeIndex = ref(0);

// const changeTab = (item: any, index: number) => {
//   console.log(item);
//   activeIndex.value = index;
//   comId.value = item.com;
// }
// 动态组件结束

// 异步组件 代码分包 suspense 开始
// 凡是通过import函数模式引入的东西 都会做一个代码拆解
// const syncVue = defineAsyncComponent(() => import("./components/suspense/sync.vue"))
// 异步组件 代码分包 suspense 结束

// <!-- 依赖注入provide/inject 开始 -->
// const colorVal = ref<string>("pink");
//子组件可以修改provide的值 如果不想子组件修改就使用readonly
// provide('color', colorVal);
// provide('color', readonly(colorVal));
// <!-- 依赖注入provide/inject 结束 -->

// 组件传参/EventBus传参 开始
// let Flag = ref<boolean>(false);
// const getFlag = (params: boolean) => {
//   Flag.value = params;
// }
// 组件传参/EventBus传参 结束

// tsx开始
// const getItem = (item: any) => {
//   console.log("接收", item);
// }
// tsx结束

// v-model 开始
// const isShow = ref<boolean>(true);
// const text = ref<string>("tom");
// v-model 结束


// 自定义指令开始
// const myDirective = {
//   // 在绑定元素的 attribute 前
//   // 或事件监听器应用前调用
//   created(el, binding, vnode, prevVnode) {
//     // 下面会介绍各个参数的细节
//   },
//   // 在元素被插入到 DOM 前调用
//   beforeMount(el, binding, vnode, prevVnode) {},
//   // 在绑定元素的父组件
//   // 及他自己的所有子节点都挂载完成后调用
//   mounted(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件更新前调用
//   beforeUpdate(el, binding, vnode, prevVnode) {},
//   // 在绑定元素的父组件
//   // 及他自己的所有子节点都更新后调用
//   updated(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件卸载前调用
//   beforeUnmount(el, binding, vnode, prevVnode) {},
//   // 绑定元素的父组件卸载后调用
//   unmounted(el, binding, vnode, prevVnode) {}
// } 常用 mounted  updated unmounted
let flag = ref<boolean>(true);
type Dir = {
  background: string
}
const vMove: Directive = {
  created() {// 元素初始化的时候
    console.log("created");
  },
  beforeMount() {// 指令绑定到元素后调用 只调用一次
    console.log("beforeMount");
  },
  // mounted(...args) { // 元素插入父级dom调用
  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) { // 元素插入父级dom调用
    console.log("mounted");
    // console.log(dir.value.background);
    el.style.background = dir.value.background;

  },
  beforeUpdate() { // 元素被更新之前调用

    console.log("beforeUpdate");
  },
  updated() { // 更新后调用
    console.log("updated");
  },
  beforeUnmount() { // 元素被移除前调用
    console.log("beforeUnmount");
  },
  unmounted() { // 指令被移除后调用 只调用一次
    console.log("unmounted");
  }
}

// 自定义指令结束
</script>





<style lang="less" scoped>
span {
  font-size: 20px;
}

.tabs {
  margin: 5px;
  padding: 20px;
  border: 1px solid #ccc;
  cursor: pointer;

  &.active {
    background-color: skyblue;
  }
}

// .box {
//   width: 50px;
//   height: 50px;
//   border: 1px solid #ccc;
//   background-color: v-bind(colorVal);
// }
</style>
