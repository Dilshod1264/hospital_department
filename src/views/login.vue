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
        <!-- <a class="link" href="#"> Ro'yhatdan o'tish</a> -->
        <button class="btn success" @click="postLogin()">Kirish</button>
      </div>
    </div>
    <notif :text="notif.text" :type='notif.type'/>"
  </div>
</template>

<script>
import {url,msgs} from '@/data/vars'
import axios from 'axios'
import notif from '../components/notif.vue'
export default {
   emits:['successLogin'], 
   components:{
      notif
   },
   data:()=>({
      login:'',
      password:'',
      notif:{}
   }),
   methods:{
      async postLogin(){
         if(this.login && this.password){
            let res = await axios.post(`${url}/auth/login`,{
               login:this.login,
               password:this.password
            }).catch(e=>{
               this.notif = {
               type:'danger',
               text:msgs[e.response.data]
               }
               setTimeout(()=>{
                  this.notif = {}
                  console.clear()
               },1800)
            })
            if(res.status == 200){
               console.log(res.data);
               let {token,user} = res.data
               this.$cookies.set('hospital-token',token)
               this.$cookies.set('hospital-user',user)

               this.$emit('successLogin')

            }
         }else{
            this.notif = {
               type:'warning',
               text:'Barcha maydonlarni toldiring'
               }
               setTimeout(()=>{
                  this.notif = {}
               },1200)
         }
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