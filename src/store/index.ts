import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import todos, { TodoState } from "./modules/todo";

// useStore类型化步骤：1.创建一个InjectionKey 2.app安装时提供InjectionKey 3.传递InjectionKey给useStore
export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
    counter: number,
    todos?:TodoState
}

export default createStore({
    state: {
        counter: 1
    },
    mutations: {
        add(state) {
            state.counter++
        }
    },

    // https://vuex.vuejs.org/zh/guide/modules.html
    // 声明子模块
    modules:{
        todos
    }
})