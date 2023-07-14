import {createStore} from "vuex"
import { modules } from "./modules"

export const store = createStore({
   state:()=>({
      url:'https://jsonplaceholder.typicode.com'
   }),
   getters:{
      mainUrl(state){
         return state.url
      }
   },
   modules

})