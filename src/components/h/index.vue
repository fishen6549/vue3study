<template>
    <div>
        <!-- <table border>
            <thead border>
                <th>name</th>
                <th>age</th>
                <th>address</th>
                <th>操作</th>
            </thead>
            <tbody border>
                <tr v-for="item in data" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.address }}</td>
                </tr>
            </tbody>
        </table> -->

        <table border>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>address</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in data" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.address }}</td>
                <td>
                    <Btn type="success"></Btn>
                    <Btn type="error"></Btn>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
// 1 template 模板书写风格 2 tsx编写风格 3 函数时组件 h函数
// h函数的源码 createVnode
// h函数的优势 跳过了模板的编译
// parser - ast -transform -js api-generate-render
import { h, reactive } from 'vue';
const data = reactive([
    {
        name: "tom1",
        age: 18,
        address: "sh"
    },
    {
        name: "tom2",
        age: 18,
        address: "sh"
    },
    {
        name: "tom3",
        age: 18,
        address: "sh"
    },
    {
        name: "tom4",
        age: 18,
        address: "sh"
    },
    {
        name: "tom5",
        age: 18,
        address: "sh"
    },
])


interface Props {
    type: "success" | "error"
}
const Btn = (props: Props) => {
    // 的一个参数是创建的节点 第二个参数是节点的属性 第三个参数是节点的内容
    console.log("props", props);

    return h("button", {
        style: {
            color: props.type === "success" ? "green" : "red"
        },
        onClick: () => { console.log('click') }
    }, 'click')
}
</script>

<style scoped>
table,
td,
th,
td {
    border-collapse: collapse;
    border: 1px solid black;
}
</style>