<template>
  <div id="app">
    <Cabecera @anadir="appAnadir" ></Cabecera>
    <Listatareas ref="lista"></Listatareas>  
    <button v-on:click="loginGoogle">Login Google</button>

  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue';
import Listatareas from './components/lista_tareas.vue';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


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
  mounted(){

  },

  methods: {
    appAnadir(tarea){
        this.$refs.lista.anadirALista(tarea);
      },
    loginGoogle(){
      const provider = new GoogleAuthProvider();
      this.login(provider);
    },

    login(provider){
      const auth = getAuth();
      signInWithPopup(auth, provider).then((result) => {
          // // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // // The signed-in user info.
          const user = result.user;
          
          console.log(user);
          // ...
        }).catch((error) => {
          // // Handle Errors here.
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // The email of the user's account used.
          const email = error.email;
          console.log(email);
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(credential);

          // ...
        });
    },
  },
}

</script>

<style scoped>
#app{
  background-color:mediumpurple;
  border: 2px solid #ccc;
  border-radius: 20px;
}
</style>
