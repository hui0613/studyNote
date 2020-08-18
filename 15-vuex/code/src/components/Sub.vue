<template>
  <div>
    <h3>count={{count}}</h3>
    <button @click="btnSub">-</button>
    <button @click="btnSubAsync">- async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    //   将全局数据映射为当前数据的计算属性,使用扩展运算符
    ...mapState(['count']),
  },

  methods: {
    btnSub() {
      this.sub();
    },
    btnSubAsync() {
      this.subAsync();
    },
    ...mapMutations(['sub']),
    ...mapActions(['subAsync']),
  },
};
</script>