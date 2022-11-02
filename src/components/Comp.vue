<template>
    <h1
        :style="{ color: titleInfo.color }">
        {{ titleInfo.value }}</h1>
    <div>
        {{$store.state.counter }}
    </div>
    <div>{{ doubleCounter }}</div>
    <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))">
    <div>Todolist:</div>
    <div v-for="item in todos" :key="item.id">
        {{ item.title }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo, TitleInfo } from '../types';

export default defineComponent({
    // prps中的任何一个属性都不是自定义类型, 而是泛型类型
    props: {
        titleInfo: {
            type: Object as PropType<TitleInfo>,
            required: true
        }
    },
    data() {
        return {
            // counter: 1,
            todos: [] as Todo[],
            todoName:''
        }
    },
    created() {
        this.todos.push({ id: 1, title: 'vue3', completed: false });
    },
    computed: {
        doubleCounter(): number {
            return this.$store.state.counter * 2
        }
    },
    methods: {
        newTodo(todoName:string):Todo{
            return {
                id:this.todos.length+1,
                title:todoName,
                completed:false
            }
        },
        addTodo(todo:Todo):void{
            this.todos.push(todo);
            this.todoName=''
        }
    },
})    
</script>

<style lang="scss" scoped>

</style>