<!-- section父组件 -->
<template>
  <div>
    <h4>父组件</h4>
    <comArticle :articles= "articleList" @onEmitIndex="onEmitIndex"></comArticle>
    <p v-if="currentIndex!=-1">选择了第{{currentIndex}}个</p>
  </div>
</template>

<script>
import comArticle from './comArticle'
export default {
  data () {
    return {
      currentIndex: -1,
      articleList: ['红楼梦', '西游记', '三国演义']
    };
  },

  computed: {},

  mounted() {},

  methods: {
    onEmitIndex(index) {
      this.currentIndex = index
    }
  },

  components: {
    comArticle
  }
}

</script>
<style lang='less' scoped>
</style>