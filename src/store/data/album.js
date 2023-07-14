
export const album = {
   state:()=>({
      albums:[],
      urlAlbom:'albums'
   }),
   getters:{
      albums(state){
         return state.albums
      }  
   },
   mutations:{
      albums(state,payload){
         state.albums = [...payload]
      }
   },
   actions:{
      async getAllbums(context){
         let res = await context.dispatch('getAxios',context.state.urlAlbom)
         if(res.status == 200){
            console.log(res.data); 
         }
         // axios.get(context.state.urlAlbom)
         // .then(res => {
         //    console.log(res.data );
         //    context.commit('albums',res.data)
         // })
      }
   }
}