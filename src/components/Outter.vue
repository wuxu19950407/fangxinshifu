<template>
<div class="content">
  <h3>这是登陆注册忘记密码公共头部</h3>
  <router-view/>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.content{
  h3{
    font-size: 50px;
  }
}
</style>
