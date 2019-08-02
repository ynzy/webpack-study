<!-- 头部组件 -->
<template>
  <div>
    <h2>这是头部组件</h2>
    <router-link to="/header/login">login</router-link>
    <router-link to="/header/register">register</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
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