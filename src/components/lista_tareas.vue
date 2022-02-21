<style scoped>
    .completado{
        background-color: rgb(200, 250, 125);
        border: 2px solid #000;
        border-radius: 20px;
        margin: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    ol{
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
        background-color: #f0bb90;
        border-radius: 20px;
        list-style: none;
    }
    #app {
      display: flex;
      flex-direction: column;
      align-content: center;
      height: 100%;
      margin-left: 20%;
      margin-right: 20%;
      padding: 0.5rem;
      text-align: center; 
      border-radius: 20px;
    }
    #listatareas{
        display: flex;
        flex-direction: column;
        align-content: center;
        height: 5%;
        padding: 0.5rem;
        margin-top: 1%;
        margin-left: 8%;
        margin-right: 15%;
        background-color: #f0bb90;
        border-radius: 20px;
        text-align: center; 
    }

    #contenedor_opciones{
        background-color: #ffc89b;
        padding-top: 15px;
        padding-bottom: 15px;
        border: 2px solid #ccc;
        border-radius: 20px;

    }
    #info{
        flex-direction: column;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    #opciones{
        flex-direction: column;
        margin-top: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
    }


</style>

<template lang="">
    <div id="listatareas">
        <ol>
            <li v-for="(tarea,index) in listatareas" :key="index">
                <div v-bind:class="{ completado: tarea.estado}" @click="marcarCompletado(index)">
                    Nombre de la tarea: {{tarea.nombre}}&nbsp; &nbsp;Descripción: {{tarea.descripcion}}&nbsp; &nbsp; Fecha: {{tarea.fecha}}&nbsp; &nbsp;Prioridad: {{tarea.prioridad}}
                    &nbsp; &nbsp;<br><br>
                </div>
                <button @click="aumPrioridad(index)">Aumentar prioridad</button>&nbsp; &nbsp;
                <button @click="desPrioridad(index)">Bajar prioridad</button>&nbsp; &nbsp;
                <button @click="borrar_tarea(index)">Borrar</button>&nbsp; &nbsp;
                <hr>
            </li>
        </ol>

        <div id="contenedor_opciones">
                <span id="info"> Tienes {{this.listatareas.length}} tareas, de las cuales {{num_incompletados}} sin completar</span>
                <br><hr>
            <div id="opciones">
                <button type="button" @click="borrar_tareas_completadas()">Borrar todas completadas</button>
                <br><br>
                <button type="button" @click="mostrarTodas">Mostrar todo</button>&nbsp; &nbsp;
                <button type="button" @click="mostrarCompletadas">Mostrar Tareas Completadas</button>&nbsp; &nbsp;
                <button type="button" @click="mostrarNoCompletadas">Mostrar Tareas Sin Completar</button>&nbsp; &nbsp;
            </div>
        </div>
    </div>
       
</template>
<script>
export default {
  name: 'Listatareas',
  data(){
    return{
      listatareas: [],
    }
  },
  
  methods: {
    anadirALista(tarea){
        this.listatareas.push(tarea);
        this.ordenarPrioridad();

    },

    actualizar_localStorage(){
        localStorage.todos = JSON.stringify(this.listatareas);
    },

    marcarCompletado(index){
      this.listatareas[index].estado = !this.listatareas[index].estado;
      this.actualizar_localStorage()
    },

    ordenarPrioridad(){
        this.listatareas = this.listatareas.sort( (a, b) => {
          if (a.prioridad < b.prioridad) {
            return -1;
          } else if (a.prioridad > b.prioridad) {
            return 1;
          } else {
            return 0;
          }
        });
        this.actualizar_localStorage();
      },

    desPrioridad(index){
      if(this.listatareas[index].prioridad < 3){
        this.listatareas[index].prioridad++;
      }
      this.ordenarPrioridad();
    },

    aumPrioridad(index){
      if(this.listatareas[index].prioridad > 1){
        this.listatareas[index].prioridad--;
      }
      this.ordenarPrioridad();
    },

    borrar_tarea(index){
      this.listatareas.splice(index, 1);
      this.actualizar_localStorage();
    },

    borrar_tareas_completadas(){
      this.listatareas = JSON.parse(localStorage.todos);

        let completadas = [];
        this.listatareas.forEach(tarea => {
            if (!tarea.estado) {
                completadas.push(tarea);
            }
        });
        this.listatareas = completadas;
        localStorage.todos = JSON.stringify(this.listatareas);

    },

    mostrarCompletadas() { // Muestra solo las tareas que tengan estado == true (completadas)
      this.listatareas = JSON.parse(localStorage.todos);

      let completadas = [];
      this.listatareas.forEach(tarea => {
          if (tarea.estado) {
              completadas.push(tarea);
          }
          this.listatareas = completadas;
      });

    },

    mostrarNoCompletadas() { // Muestra solo las tareas que tenas esta == false(no completadas)
        this.listatareas = JSON.parse(localStorage.todos);

        let noCompletadas = [];
        this.listatareas.forEach(tarea => {
            if (!tarea.estado) {
                noCompletadas.push(tarea);
            }
            this.listatareas = noCompletadas;
        });
    },

    mostrarTodas() {
       this.listatareas = JSON.parse(localStorage.todos);
        },
    },

    computed:{
        num_incompletados(){
            return this.listatareas.filter(tarea => !tarea.estado).length;
        },
    },

    mounted(){
        if(localStorage.todos){
        this.listatareas = JSON.parse(localStorage.todos);
        }
    },
}
</script>
