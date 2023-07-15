import axios from "axios";

export const helpers = {
   actions:{
      async getAxios({getters},payload){
        return await axios.get(`${getters.mainUrl}/${payload}`)
      },
      async postAxios({getters},payload){
         return await axios.post(`${getters.mainUrl}/${payload.url}`,payload.data)
         .catch(e =>{
            let{data} = e.response
            console.log(data);
         })
      }
   }
}