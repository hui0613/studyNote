<template>
  <div>
    <h3>count={{$store.state.count}}</h3>
    <button @click="btnAdd">+</button>
    <button @click="btnAddAsync">+ async</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    btnAdd() {
      this.$store.commit('add', 3);
    },
    btnAddAsync() {
      this.$store.dispatch('addasync', 4);
    },
  },
};
</script>