import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// useStore类型化步骤：1.创建一个InjectionKey 2.app安装时提供InjectionKey
export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
    counter: number
}

export default createStore({
    state: {
        counter: 1
    },
    mutations: {
        add(state) {
            state.counter++
        }
    }
})