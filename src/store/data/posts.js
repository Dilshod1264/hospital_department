
export const post = {
   state(){
      return {
         posts:[],
         urlPost:'posts'
      }
   },
   getters:{
      posts(state){
         return state.posts
      }
   },
   mutations:{
     postInsert(state,payload){
      state.posts = [...payload]
     }
      
   },
   actions:{
      async getPosts(context){
         let res = await context.dispatch('getAxios',context.state.urlPost)
         if(res.status == 200){
            console.log(res.data); 
         }
      }
   }
}