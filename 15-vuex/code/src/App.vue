<template>
  <div>
    <Add></Add>
    <br />--------------
    <br />
    <Sub></Sub>
  </div>
</template>

<script>
import Add from '@/components/Add.vue';
import Sub from '@/components/Sub.vue';
export default {
  data() {
    return {};
  },
  components: {
    Add,
    Sub,
  },
};
</script>