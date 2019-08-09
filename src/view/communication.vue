<!-- 组件通信 -->
<template>
  <div>
    <!-- <comSecition></comSecition> -->
    <!-- <comA></comA> -->
    <comparent></comparent>
  </div>
</template>

<script>
import comSecition from '../componentCommunication/comSecition'
import comA from '../componentCommunication/comA'
import comparent from '../componentCommunication/Comparent'
export default {
  data () {
    return {
    };
  },

  computed: {},

  mounted() {},

  methods: {},

  components: {
    comSecition,
    comA,
    comparent
  }
}

</script>
<style lang='less' scoped>
</style>