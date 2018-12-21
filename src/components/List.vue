<template>
<div class="content">
  <router-link to="/outter/login">{{adc}}{{login}}</router-link>
  <p v-if="show">show</p>
  <span v-once>{{login}}</span>
  <button v-on:click="foo">点击</button>
  <button v-on:click="number++">加数字</button>
  <button>{{fullname}}</button>
  <p>我被点击了{{number}} 次</p>
  <input type="text" v-model="login" name="" id="">
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      login: "跳转到登陆",
      n: 2,
      show: false,
      firstName:'旭',
      lastName:'吴',
      number:0
    };
  },
  methods: {
    foo: function(e) {
      console.log("我被点击了");
      // this.login ='我被改变了'
      this.fullname ='诚诚 李';
      console.log(e,e.target)
    }
  },
  computed: {
    // 这里面的是方法，方法名就是返回值
    adc() {
      return this.login
        .split("")
        .reverse()
        .join("");
    },
    fullname:{
      get(){
        return this.firstName+' '+this.lastName
      },
      set(newvalue){
       var names =newvalue.split(' ') 
       this.firstName =names[0]
       this.lastName =names[names.length-1]
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.content {
  h3 {
    font-size: 50px;
  }
}
</style>
