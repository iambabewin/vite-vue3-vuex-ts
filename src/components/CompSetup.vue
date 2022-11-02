<template>
    <h1 :style="{ color: titleInfo.color }">
        {{ titleInfo.value }}</h1>
    <div @click="$store.commit('add')">
       counter click： {{ counter }}
    </div>
    <div>{{ doubleCounter }}</div>
    <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))">
    <div v-for="item in items" :key="item.id">
        {{ item.name }}
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from 'vue';
import type {PropType} from 'vue';
import type { Todo, TitleInfo } from '../types';
import {useStore} from 'vuex';
import { key } from '../store';

const store = useStore(key);
// const counter = ref(1);
const counter = computed(() => store.state.counter);
const doubleCounter = computed(() => counter.value * 2);

// 属性声明
defineProps({
    titleInfo: {
        type: Object as PropType<TitleInfo>,
        required: true
    }
})

const items = ref([] as Todo[]);
items.value.push({ id: 1, name: 'vue3', completed: false });
// const items = reactive({
//     items: [] as Todo[],
//     todoName: ''
// })
// items.items.push({ id: 1, name: 'vue3', completed: false });

const todoName = ref('');
const newTodo = (todoName: string): Todo => {
    return {
        id: items.value.length + 1,
        name: todoName,
        completed: false
    }
}

const addTodo = (todo: Todo): void => {
    items.value.push(todo);
    todoName.value = ''
}

</script>

<style lang="scss" scoped>

</style>