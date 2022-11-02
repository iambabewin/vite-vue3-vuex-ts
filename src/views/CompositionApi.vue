<template>
    <div>
        <CompSetup :title-info="{ value: 'Composition Api', color: 'pink' }" />
        <p>some other content</p>
        <button @click="backToHome()">back to home</button>
   </div>
</template>

<script setup lang="ts">
import CompSetup from '../components/CompSetup.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const backToHome = ()=>{
    router.push('/');
}

</script>

<style lang="scss" scoped>

</style>