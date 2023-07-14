import axios from "axios";

export const helpers = {
   actions:{
      async getAxios(context,payload){
        return await axios.get(`${context.getters.mainUrl}/${payload}`)
      }
   }
}