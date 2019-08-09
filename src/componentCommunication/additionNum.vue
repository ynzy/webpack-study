<!--  -->
<template>
  <div>
    <button @click="additionHandle">点击</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num:1
    };
  },
  methods: {
    additionHandle() {
      this.$bus.emit('addition', {
        num:this.num++
      })
    }
  },

  components: {}
}

</script>
<style lang='less' scoped>
</style>