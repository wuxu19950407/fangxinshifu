<template>
  <h5 v-bind:class="style">登陆页面</h5>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
     style:'style'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.style{
  color: red
}
</style>
