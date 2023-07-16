import { converDate } from "../../helpers/incfunc"

export const spec = {
   state:()=>({
      specs:[],
      spec:{},
      countSpec:0
   }),
   getters:{
      specs({specs}){
         return specs
      },
      spec({spec}){
         return spec
      },
      countSpec({countSpec}){
         return countSpec
      },
      activeSpecs({specs}){
         return specs.filter(spec =>spec.status == 0)
      }
   },
   mutations:{
      setSpecs(state,playload){
         state.specs = [...playload.map(item =>{
            item.createdTime = converDate(item.createdTime)
            return item
         })]
      },
      newSpec(state,playload){
         state.specs = [
            {...playload,createdTime:converDate(payload.createdTime)},
            ...state.specs]
      },
      updateSpec(state,playload){
         state.specs = state.specs.map(spec =>{
            if(spec._id == payload._id)
               return {...playload,createdTime:converDate(payload.createdTime)}
            return spec
         })
      },
      deleteSpec(state,payload){
         state.specs = state.specs.filter(spec =>{
            if(spec._id == payload) return false
            return spec
         })
      }
   },
   actions:{
      async getAllSpecs({dispatch,commit}){
         let res = await dispatch('getAxios','spec')
         if(res.status == 200){
            commit('setSpecs',res.data)
         }
      },
      async addSpec({dispatch,commit},payload){
         let res = await dispatch('postAxios',{
            url: 'spec',
            data: payload
         })
         if(res.status == 201){
            commit('newSpec',res.data),
            commit('setNotif',{
               type:'success',
               text:'Yangi mutaxassislik qoshildi'
            })
         }
      },
      async deleteSpec({dispatch,commit},payload){
         let res = await dispatch('deleteAxios',`spec/${payload}`)
         if(res.status == 200){
            commit('deleteSpec',payload)
            commit('setNotif',{
               type:'warning',
               text:'Mutaxassislik o`chirildi'
            })
         }
         
      }
   }
}