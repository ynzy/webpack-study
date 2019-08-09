<!-- 总组件 -->
<template>
  <div>
    <p>子组件值:{{message}}</p>
    <p>获取父组件值:{{parentVal}}</p>
    <button @click="changeB">点击改变父组件中的值</button>
    <p>子组件B,inject获取父组件数据:{{demo}}</p>
    <comC></comC>
  </div>
</template>

<script>
import comC from './comC'
import { log } from 'util';
export default {
  inject: ['for'],
  data () {
    return {
      message: '这是子组件',
      demo: this.for
    };
  },
  computed: {
    parentVal() {
      return this.$parent.msg
    }
  },
  methods: {
    changeB() {
      this.$parent.msg = '子组件改变了父组件的值'
    },
    sayHello() {
      console.log('hello world');
      
    }
  },
  components: {comC}
}
</script>
<style lang='less' scoped>
</style>