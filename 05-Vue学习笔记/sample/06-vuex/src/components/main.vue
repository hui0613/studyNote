<template>
  <div>
    main
    <div></div>
  </div>
</template>

<script>
export default {
  computed: {
    getState() {
      return this.$store.state.demo;
    }
  },
  watch: {
    getState(val) {
      console.log("main watch");
      console.log(val);
    }
  }
};
</script>