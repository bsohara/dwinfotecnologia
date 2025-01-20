<template>
    <!-- ... outros elementos ... -->
    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a v-if="!link.component" :href="link.url">{{ link.name }}</a>
          <button v-else @click="handleLink(link)" class="login-button">{{ link.name }}</button>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'DWInfoHeader',
    data () {
      return {
        links: [
          { url: '/servicos-online', name: 'Serviços On-Line' },
          { url: '/produtos-e-servicos', name: 'Produtos e Serviços' },
          { url: '/sobre', name: 'Sobre a DWInfo' },
          { 
            url: '/login',
            name: 'Login',
            component: () => import('@/views/LoginView.vue')
          }
        ]
      }
    },
    methods: {
      handleLink(link) {
        if (link.component) {
          this.$router.push({ name: 'home' }).then(() => {
            this.handleLogin();
          });
        }
      },
      handleLogin() {
        // Lógica para iniciar o processo de login
        console.log('Iniciando processo de login');
      }
    }
  }
  </script>
  
  <style scoped>
  .login-button {
    background-color: #333;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #444;
  }
  </style>
  