<template>
  <div>
    12
    <div>{{$store.state.demo}}</div>
    <input type="button" @click="btn" value="按钮" />
    <!-- <div @click="btn">跳转</div> -->
    <maindemo></maindemo>
  </div>
</template>

<script>
import maindemo from "./main";
export default {
  components: {
    maindemo
  },
  methods: {
    btn() {
      console.log("input btn ");
      this.$store.commit("getQuery", "hello");
      // this.$router.push({
      //   path: "/main"
      // });
    }
  }
};
</script>