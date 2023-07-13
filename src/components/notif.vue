<template>
   <div :class="`notif ${type || ''} ${type ? 'active' : ''}`">
      {{ text }}
   </div>
  
</template>

<script>
export default {
   props:['text','type']
}
</script>

<style>
   .notif{
    position: fixed;
    top: 20px;
    right: -400px;
    width: 300px;
    padding: 20px;
    z-index: 3;
    background-color:#fff;
    font-size: 18px;
    border:1px solid #e7e7e7;
    transition: all 0.3s linear;

}
.notif.active{
    right: 20px;
}
.notif.success{
    border-left: 4px solid #27AE60;
}
.notif.warning{
    border-left: 4px solid #f3ff48;
}
.notif.danger{
    border-left: 4px solid #c84d34;
}
</style>