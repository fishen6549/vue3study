<template>
    <main>
        <el-input placeholder="测试代码" class="input"> </el-input>
        <!-- 给每个dom节点加一个不重复的data属性来表示他的唯一性 -->
        <!-- 在每句css选择器的末尾 编译后生成的css语句 加一个当前组件的data属性选择器 来私有化样式 -->
        <!-- 如果组件内包含其他组件 只会给其他组件的最外层标签加上当前组件的data属性 -->
    </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
</script>

<style lang="less" scoped>
.input {
    width: 300px;

    // .el-input__inner {
    :deep(.el-input__inner) {
        background-color: pink;
    }
}
</style>