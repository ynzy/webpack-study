<!--  -->
<template>
  <div>
    子组件c,inject获取父组件数据{{demo}}
  </div>
</template>

<script>
export default {
  inject: ['for'],
  data () {
    return {
      demo: this.for
    };
  },

  computed: {},

  mounted() {},

  methods: {},

  components: {}
}

</script>
<style lang='less' scoped>
</style>