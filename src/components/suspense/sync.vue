<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { axios } from '../../server/axios';
interface Data {
    data: {
        name: string,
        age: number
    }
}
const { data } = await axios.get<Data>("/data.json")
</script>

<style scoped></style>