<template>
  <div id="app">
    <Cabecera @anadir="appAnadir" ></Cabecera>
    <Listatareas ref="lista"></Listatareas>  

  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Listatareas from './components/lista_tareas.vue'


export default {
  name: 'app',
  components: {
    Cabecera,
    Listatareas
  },
  data(){
    return{
    
    }
  },
  methods:{
    appAnadir(tarea){
        this.$refs.lista.anadirALista(tarea);
      },
  }
}

</script>

<style scoped>
#app{
  background-color:mediumpurple;
  border: 2px solid #ccc;
  border-radius: 20px;
}
</style>
