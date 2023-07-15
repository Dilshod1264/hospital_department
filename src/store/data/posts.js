
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
      async getPosts({dispatch,commit,state}){
         let res = await dispatch('getAxios',state.urlPost)
         if(res.status == 200){
          
         }
      }
   }
}