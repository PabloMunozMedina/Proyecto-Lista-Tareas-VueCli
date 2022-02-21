<template>
  <div id="cabecera">
            <h1>LISTA TAREAS</h1>
            <div id="añadir">
                <label for="nombre">Escribe nombre tarea</label>&nbsp;
                <input type="text" v-model="nombre" name="nombre">
                &nbsp; &nbsp;
                <label for="descripcion">Descripción</label>&nbsp;
                <input type="text" v-model="descripcion" name="descripcion">
                &nbsp; &nbsp;
                <button v-bind:disabled="nombre == '' || descripcion == '' "  v-on:click="lanzarAnadir">Añadir Tarea</button>  
            </div>
  </div>
</template>

<script>
export default {
  name: 'cabecera',
  props: [],
  data(){
    return{
      nombre: '',
      descripcion: '',

    }
  },
  emits: ['anadir'],
  methods: {
    lanzarAnadir(){
      let tarea = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        fecha: new Date().toLocaleString(),
        prioridad: 1,
        estado: false,
      };

      this.$emit('anadir', tarea);
    }
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cabecera{
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 5%;
    width: 100%;
    background-image: url("../assets/fondo.jpg");
    border: 2px solid #ccc;
    border-radius: 20px;
    text-align: center; 
    padding-bottom: 10px;

}
</style>
