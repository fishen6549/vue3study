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
</template>

<script setup lang="ts">
// import ShopCart from './components/ShopCart.vue';
// import WatchEffect from './components/WatchEffect.vue';
// import LifeCicle from './components/LifeCicle.vue';
// import Layout from "./components/layout/index.vue"
// import Card from './components/Card.vue';
// import Tree from './components/Tree.vue';
import { ref, shallowRef, triggerRef, customRef, reactive, toRef, toRefs, toRaw } from 'vue';
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
type M = {
  name: string
}

function MyRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        value = newVal;
        trigger();
      }
    }
  })
}

const mydom = ref<HTMLDivElement>();
// console.log(mydom);

// const man = ref<M>({ name: "banana" });
const man1 = ref({ name: "banana1" });
const man2 = shallowRef({ name: "banana2" });
const obj = MyRef<string>("banana MyRef")
const change = () => {
  // man1.value.name = 'potato';
  // console.log(man1);
  // man2.value.name = 'potato222'; //无效 shallowRef只更新到value
  // man2.value = {name:"potato222"}; //有效 shallowRef只更新到value
  // man2.value.name = '我被影响了'; //triggerRef 强制更新依赖
  // triggerRef(man2);
  // console.log(man2);

  // obj.value = 'customRef banana MyRef';
  console.log(mydom.value, mydom.value?.innerText);
}
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
</script>



<style lang="less">
span {
  font-size: 20px;
}
</style>
