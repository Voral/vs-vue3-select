declare module 'vs-vue3-select' {
  import { Component } from 'vue'

  const VueSelect: Component & {
    props: {
      components: {
        default: () => Record<string, any>
      }
    }
  }
  export default VueSelect
}
