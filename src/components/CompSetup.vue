<template>
    <h1 :style="{ color: titleInfo.color }">
        {{ titleInfo.value }}</h1>
    <div @click="$store.commit('add')">
       counter click： {{ counter }}
    </div>
    <div>doubleCounter：{{ doubleCounter }}</div>

    addTodo：<input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))">
    <div>Todolist:</div>
    <div v-for="item in todos" :key="item.id">
        {{ item.title }}
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

const todos = computed(()=>store.state.todos?.data)
const todoName = ref('');
// todos初始化
store.dispatch('todos/initTodo');

// todos.value.push({ id: 1, name: 'vue3', completed: false });
// 声明初始值的另外一种方式 使用reactive, 则引用时需要使用items.todos
// const items = reactive({
//     todos: [] as Todo[],
//     todoName: ''
// })
// items.todos.push({ id: 1, name: 'vue3', completed: false });

const newTodo = (todoName: string): Todo => {
    return {
        id: todos.value!.length + 1,
        title: todoName,
        completed: false
    }
}

const addTodo = (todo: Todo): void => {
    todos.value!.push(todo);
    todoName.value = ''
}

</script>

<style lang="scss" scoped>

</style>