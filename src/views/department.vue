<template>
  <div>
      <div class="box">
         <div class="d-flex align-items-center justify-content-between">
            <div class="title">Bo'limlar</div>
          </div>
            <table class="table">
              <thead> 
                <th>№</th>
                <th>Nomi</th>
                <th>Yaratilgan vaqti</th>
                <th> </th>
              </thead>
              <tbody> 
                <tr v-for="department,index of departments" :key="department._id">
                   <td>{{ index + 1 }}</td>
                   <td>{{ department.title }}</td>
                   <td>{{ department.createdTime }}</td>  
                  <td> </td>
                </tr>
              </tbody>
            </table>
            <ul class="pagination">
              <li><img src="@/assets/img/right.png" alt=""></li>
              <li class="active">1</li>
              <li>2 </li>
              <li>3     </li>
              <li><img src="@/assets/img/left.png" alt=""></li>
            </ul>
      </div>
      <button class="add" @click="toggle = true" >
         <img src="@/assets/img/doctors.svg" alt="">
      </button>
      <div :class="`modal ${toggle ? 'open' : ''}`"> 
      <div class="modal_box"> 
        <h4 class="text-center mb-20"> Yangi bo'lim qoshish</h4>
        <form id ="depart" @submit.prevent="add()">
              <input 
              class="input" 
              name="title" 
              type="text" 
              placeholder="Bo'lim nomini kiriting"
              v-model="title"
              @keypress.enter="add() "
              >
        </form>
        <div class="modal_footer mt-20">
          <button class="btn danger" @click="toggle = false">Bekor qilish</button>
          <button class="btn success btn_add" v-if="editToggle" @click="add()">Kiritish</button>
          <button class="btn success" v-else @click="add( )">Saqlash</button>
        </div>
      </div>
    </div>
    <notif :text="notif.text" :type='notif.type'/>"
  </div>
</template>

<script>
import {url} from '@/data/vars'
import axios from 'axios'
import notif from '../components/notif.vue'
export default {
   components:{
      notif,
   },
   data:()=>({
      toggle:false,
      editToggle:true,
      title:'',
      departments:[],
      token:'',
      notif:{}
   }),
   methods:{
      async add(){
         if(this.title){
            let res = await axios.post(`${url}/department`,{
               title: this.title
            },{
               headers:{
                  "authorization" : `Bearer ${this.token}`
               }
            })
            if(res.status == 201){
               this.notif = {
                  type:'success',
                  text:'Yangi bolim qoshildi'
               }
               this.toggle = false
               this.title = ''
               this.departments = [res.data,...this.departments]
               setTimeout(()=>{
                  this.notif = {}
               },1200)
            }  
         }
         else{
            this.notif = {
               type:'warning',
               text:'Bolim nomini toldiring'
               }
               setTimeout(()=>{
                  this.notif = {}
               },1200)
         }
      },
      async getDepartments(){
         let res = await axios.get(`${url}/department`,{
            headers:{
                  "authorization" : `Bearer ${this.token}`
               }
         })
         if(res.status == 200){
            this.departments = [...res.data]
            console.log(res.data);
         }
      }
   },
   mounted(){
      if(this.$cookies.isKey('hospital-token')){
         this.token = this.$cookies.get('hospital-token')
      }
      this.getDepartments()
   }
};
</script>

<style>

</style>