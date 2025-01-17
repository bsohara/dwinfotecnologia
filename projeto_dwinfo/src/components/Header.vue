<template>
    <header class="header">
      <!-- Logo -->
      <div class="logo">
        <img :src="logo" alt="Logo" />
      </div>
  
      <!-- Menu -->
      <nav class="menu">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
    data() {
      return {
        logo: require("@/assets/Logo-Oficial-Dwinfo2.png"), // Caminho para o logo
        menuItems: [
          { text: "Serviços on-line", link: "#sobre" },
          { text: "Produtos e Serviços", link: "#servicos" },
          { text: "Sobre a DWInfo", link: "#contato" },
          { text: "Login", link: "#login" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilização do header */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #212121;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .logo img {
    height: 50px;
  }
  
  .menu ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu ul li {
    margin-left: 20px;
  }
  
  .menu ul li a {
    text-decoration: none;
    color: #d1d1d1;
    font-weight: bold;
    padding: 20px;
  }
  
  .menu ul li a:hover {
    color: #ffffff;
    transition: 500ms;
    background-color: #000000;
  }
  </style>
  