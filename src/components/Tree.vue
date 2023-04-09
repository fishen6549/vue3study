<template>
    <!-- 使用递归组件最好阻止冒泡 -->
    <div @click.stop="handleClick(item, $event)" class="tree" v-for="item in data">
        <input type="checkbox" v-model="item.checked"> <span>{{ item.name }}</span>
        <Tree v-if="item.children?.length" :data="item.children"></Tree>
        <!-- <ttt v-if="item.children?.length" :data="item.children"></ttt> -->
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
interface Tree {
    name: string,
    checked: boolean,
    children?: Tree[]
}

defineProps<{
    data?: Tree[]
}>();

const handleClick = (item: Tree, e: Event) => {
    console.log(item, e.target);
}
</script>
<!-- <script lang="ts">
export default {
    name: "ttt"
}
</script> -->
<style scoped>
.tree {
    margin-left: 20px;
}
</style>