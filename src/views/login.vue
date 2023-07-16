<template>
  <div>
   <div class="auth">
      <div class="box">
         
        <h4 class="mb-20">Tizimga kirish</h4>
        <form class="form" name="login" @submit.prevent="postLogin()">
          <div class="mb-20"> 
            <input class="input" type="text" v-model="login" placeholder="Login">
          </div>
          <div class="mb-20">
            <input class="input" type="password" v-model="password" placeholder="Mahfiy kalit">
          </div>
        </form>
        <a class="link" href="#"> Ro'yhatdan o'tish</a>
        <button class="btn success" @click="postLogin()">Kirish</button>
      </div>
    </div>
    <notif :text="notif.text" :type='notif.type'/>"
  </div>
</template>

<script>

import notif from '../components/notif.vue'
export default {
   emits:['successLogin'], 
   components:{
      notif
   },
   data:()=>({
      login:'',
      password:'',
      notif:{},
      name:''
   }),
   methods:{

      async postLogin(){
         if(this.login && this.password){
            this.$store.dispatch('login',{
               login:this.login,
               password:this.password
            }) 
         }
      }
   },
   computed:{
      posts(){
         return this.$store.getters.posts
      }
   }
}
</script>
<style lang="scss">
   .auth{
    height: 100vh;
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #F6F8FB;
    .form{
        max-width: 268px;
        width: 100%;
    }
    .box{
        width: 642px;
        height: 317px;
        background:#FFFFFF;
        box-shadow: 0px 12px 16px rgba(125,125,125,0.25);
        border-radius: 8px;
        max-width: 100%;
        padding: 45px;
        display: flex;
        flex-direction: column;
        align-items:center;
    }
    .link{
        font-size: 11px;
        text-decoration: underline;
        display: inline-block;
        margin-bottom: 14px; 
    }

}
</style>