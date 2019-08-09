<!-- article子组件 -->
<template>
  <div>
    <h4>article子组件</h4>
    <div v-for="(item,index) in articles" :key= "index" @click="emitIndex(index)">{{item}}</div>
  </div>
</template>

<script>
export default {
  props: ['articles'],
  data () {
    return {
    };
  },

  computed: {},

  mounted() {},

  methods: {
    emitIndex(index){
      this.$emit('onEmitIndex',index)
    }
  },

  components: {}
}

</script>
<style lang='less' scoped>
</style>