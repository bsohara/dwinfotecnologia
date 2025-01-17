<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
/* Estilize o fundo do aplicativo inteiro */
html, body {
  height: 100%; /* Garante que ocupem toda a altura da tela */
  margin: 0; /* Remove qualquer margem */
}

#app {
  background-color: #161616; /* Cor de fundo */
  background-size: cover; /* Faz a imagem ocupar todo o espaço */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Impede que a imagem se repita */
  height: 100vh; /* Garante que o fundo cubra toda a altura da tela */
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

main {
  flex: 1; /* Faz com que o conteúdo ocupe o restante da altura */
  padding: 20px;
}
</style>
