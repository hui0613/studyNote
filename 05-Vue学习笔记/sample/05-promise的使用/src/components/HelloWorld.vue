<template>
  <button @click="btnClick">查询</button>
</template>

<script>
export default {
  methods: {
    methods: {
      btnClick() {
        new Promise((resolve, rejece) => {}).then(data => {
          console.log(data);
        });
      }
    }
  }
};
</script>