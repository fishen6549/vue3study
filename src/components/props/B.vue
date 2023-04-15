<template>
    <div class="B">
        {{ flag }}
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import Bus from '../../Bus';
// type Props = {
//     flag: boolean
// }

// defineProps<Props>();

const flag = ref<boolean>(false);
Bus.on('on-click', (params: boolean) => {
    flag.value = params;
})
</script>

<style>
.B {
    width: 200px;
    height: 200px;
    background-color: skyblue;
}
</style>