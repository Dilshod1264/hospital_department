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
                  <td> <button @click="remove(department._id)">X</button> </td>
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
   
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
   data:()=>({
      toggle:false,
      editToggle:true,
      title:'',
      token:'',
      notif:{}
   }),
   computed: {
      ...mapGetters([
         'departments'
      ]
      )
   },
   methods:{
      ...mapActions([
      'getAllDepartments',
      'addDepartment',
      'deleteDepartment'
      ]),
      async add(){
         if(this.title){
            this.addDepartment({title:this.title})
            this.clear()
         }
         else{
            this.$store.commit('setNotif',{
               type:'warning',
               text:'Bolim nomini kiriting'
            })
         }
      },
      remove(id){
         if(confirm('Qaroringiz qattiymi')){
            this.deleteDepartment(id)
         }
      },
      clear(){
         this.toggle = false,
         this.title = ""
      }
   },
   mounted(){
      this.getAllDepartments()
   }
};
</script>

<style>

</style>