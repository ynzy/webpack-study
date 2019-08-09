<!--  -->
<template>
  <div>
    计算:{{count}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    };
  },

  computed: {},

  mounted() {
    this.$bus.on('addition',param => {
      this.count = this.count + param.num
    })
  },

  methods: {},

  components: {}
}

</script>
<style lang='less' scoped>
</style>