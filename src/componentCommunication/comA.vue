<!-- 父组件 -->
<template>
  <div>
    <h6>父组件</h6>
    <div>父组件值:{{msg}}</div>
    <button @click="changA">点击改变子组件值</button>
    <h6>子组件</h6>
    <comB ref="comB"></comB>
    <hr>
    <showNumCom></showNumCom>
    <additionNumCom></additionNumCom>
  </div>
</template>

<script>
import comB from './comB';
import additionNumCom  from './additionNum';
import showNumCom from './showNum'
export default {
  provide: {
    for: '父组件提供的变量'
  },
  data () {
    return {
      msg: 'hello world'
    };
  },
  mounted() {
    const comB = this.$refs.comB;
    console.log(comB);
    comB.sayHello();
  },
  methods: {
    changA() {
      this.$children[0].message = '父组件改变了子组件的值'
    }
  },

  components: {comB,additionNumCom,showNumCom}
}

</script>
<style lang='less' scoped>
</style>