<template>
    <div v-if="modelValue">
        v-model接收的值:{{ modelValue }}
        内容:<input @input="inputChange" type="text" :value="textVal">
        <button @click="changeVModel">关闭</button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: boolean,
    textVal: string,
    textValModifiers?: { //接受修饰符
        isTest: boolean
    }
}>();

const emit = defineEmits(['update:modelValue', "update:textVal"]) // 固定语法用来更新v-model的值
const changeVModel = () => {
    emit("update:modelValue", false)
}

const inputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    // console.log("inputChange",target);
    // emit("update:textVal", target.value)
    emit("update:textVal", props.textValModifiers?.isTest ? target.value + "123" : target.value)

}
</script>

<style scoped></style>