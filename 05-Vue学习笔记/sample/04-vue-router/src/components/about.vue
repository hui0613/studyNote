<template>
  <div>
    <p>ABout</p>
    <p>接受的参数为:{{$route.query.id}}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.id);
  }
};
</script>