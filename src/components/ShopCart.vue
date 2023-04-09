<template>
    <div>
        <table>
            <thead>
                <th>名称</th>
                <th>数量</th>
                <th>单价</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr v-for="(item, index) in data" :key="index">
                    <td>{{ item.name }}</td>
                    <td><button @click="addAndSub(item, false)">-</button>{{ item.num }}<button
                            @click="addAndSub(item, true)">+</button></td>
                    <td>{{ item.price * item.num }}</td>
                    <td><button @click="delShop(index)">删除</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>总价:{{ $total }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
type Shop = {
    name: string,
    num: number,
    price: number
}

let $total = ref(0);

const data = reactive<Shop[]>([
    {
        name: "短袖",
        num: 1,
        price: 100,
    },
    {
        name: "裤子",
        num: 1,
        price: 200,
    },
    {
        name: "鞋子",
        num: 1,
        price: 300,
    },
])

const addAndSub = (item: Shop, type: boolean) => {
    if (type && item.num < 99) {
        item.num++;
    }

    if (!type && item.num > 1) {
        item.num--
    }
    // total();
}

const delShop = (index: number) => {
    console.log(index);
    data.splice(index, 1)
}

// const total = () => {
//     $total.value = data.reduce((prev, next: Shop) => {
//         return prev + (next.num * next.price)
//     }, 0)
// }

// total();
$total = computed<number>(() => {
    return data.reduce((prev, next: Shop) => {
        return prev + (next.num * next.price)
    }, 0)
})
computed
</script>

<style scoped lang="less">
table {
    border: 1px solid black;
    border-collapse: collapse;
    width: 800px;
}

th,
tr,
td {
    border: 1px solid black;
    text-align: center;
    min-width: 100px;
}
</style>