<!--  -->
<template>
  <div>
    <comChild1
      :name= 'name'
      :age= "age"
      :gender= "gender"
      :height= "height"
      title="程序员成长指北"
    ></comChild1>
  </div>
</template>

<script>
import comChild1 from './ComChild1'
export default {
  data () {
    return {
      name: 'zhang',
      age: '18',
      gender: '女',
      height: '158'
    };
  },

  computed: {},

  mounted() {},

  methods: {},

  components: {comChild1}
}

</script>
<style lang='less' scoped>
</style>