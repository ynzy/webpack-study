<!-- 子组件1 -->
<template>
  <div>
    <h5>child1</h5>
    <p>name: {{ name}}</p>
    <p>childCom1的$attrs: {{ $attrs }}</p>
    <comChild2 v-bind="$attrs"></comChild2>
  </div>
</template>

<script>
import comChild2 from './ComChild2'
export default {
  data () {
    return {
    };
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    name: String //name作为props属性绑定
  },
  created() {
    console.log(this.$attrs);
    
  },
  components: {comChild2}
}

</script>
<style lang='less' scoped>
</style>