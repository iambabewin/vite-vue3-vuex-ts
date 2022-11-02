/// <reference types="vite/client" />

// 扩展ts对vue的识别
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
