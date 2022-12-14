import { Module } from "vuex";
import { State } from "..";
import http from "../../api/request";
import { Todo } from "../../types";

const initialState = {
    data: [
        {
            id: 1,
            title: '',
            completed: false
        }
    ] as Todo[]
}

// 用typeof反推initialState这个值的类型
export type TodoState = typeof initialState;

export default {
    namespaced: true,
    state: initialState,

    // https://vuex.vuejs.org/zh/guide/mutations.html
    mutations: {
        initTodo(state, payload: Todo[]) {
            state.data = payload
        },
        addTodo(state, payload: Todo) {
            state.data.push(payload)
        }
    },

    // https://vuex.vuejs.org/zh/guide/actions.html
    actions: {
        initTodo({ commit }) {
            http.get<Todo>('/api/todos/1')
                .then(res => {
                    console.log(res.data)
                    commit('initTodo', [res.data])
                    // commit('addTodo', res.data)
                })
            // setTimeout(() => {
            //     commit('initTodo', [{
            //         id: 1,
            //         name: 'vue3+ts',
            //         completed: false
            //     }])
            // }, 500);
        },
        addTodo({ commit, state }, payload: string) {
            commit('addTodo', {
                id: state.data.length + 1,
                title: payload,
                completed: false
            } as Todo)
        }
    }
} as Module<TodoState, State>
