<template>
    <div class="content">
        内容区域
        <div v-for="item in 100">{{ item }}</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.content {
    flex: 1;
    overflow: auto;
    margin: 20px;
    border: 1px solid #ccc;
}
</style>