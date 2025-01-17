<template>
    <header class="header">
      <!-- Logo -->
      <div class="logo">
        <img :src="logo" alt="Logo" />
      </div>
  
      <!-- Menu com dropdowns -->
      <nav class="menu">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index" class="menu-item" @mouseover="item.showDropdown = true" @mouseleave="item.showDropdown = false">
            <a href="javascript:void(0)">{{ item.text }}</a>
  
            <!-- Submenu (dropdown) -->
            <ul v-if="item.showDropdown" class="dropdown">
              <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                <a :href="subItem.link">{{ subItem.text }}</a>
              </li>
            </ul>
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
            {
                text: "⚙️ Serviços on-line",
                submenu: [
                { text: "Cadastro", link: "#cadastro" },
                { text: "Mail Marketing", link: "#mail-marketing" },
                { text: "Abertura de chamado técnico", link: "#abertura-chamado" },
                { text: "Verificação de chamado técnico", link: "#verificacao-chamado" },
                { text: "Relatório financeiro", link: "#relatorio-financeiro" },
                { text: "Relatório de serviços prestados", link: "#relatorio-servicos" },
                { text: "Registro de domínioss", link: "#relatorio-dominios" },
                { text: "Hospedagem de sites", link: "#hospedagem-sites" },
                ]
            },
          {
            text: "💼 Produtos e Serviços",
            submenu: [
              { text: "Servidores", link: "#servidores" },
              { text: "Computadores", link: "#computadores" },
              { text: "Transmissão de Dados", link: "#transmissao-dados" },
              { text: "Som e Vídeo", link: "#som-video" },
              { text: "Armazenamento", link: "#armazenamento" },
              { text: "Peças", link: "#pecas" },
              { text: "Manutenção predial ou emergencial", link: "#manutencao" },
              { text: "Planos de manutenção", link: "#planos-manutencao" },
              { text: "Programação sob medida", link: "#programacao-sob=medida" },
              { text: "Softwares", link: "#softwares" },
            ],
            showDropdown: false
          },
          {
            text: "⁉️ Sobre a DWInfo",
            submenu: [
              { text: "Quem Somos", link: "#quem-somos" },
              { text: "Objetivo de negócio", link: "#objetivo-negocio" },
              { text: "Missão, Visão e Valores", link: "#missao-visao-valores" },
              { text: "Expertise Profissional", link: "#expertise-profissional" },
              { text: "Contato e Localização", link: "#contato-localizacao" },
            ],
            showDropdown: false
          },
          {
            text: "🙋 Login", link: "#login"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilo do header */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    background-color: #343434;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
  }
  
  .logo img {
    height: 50px;
  }
  
  /* Estilos do menu */
  .menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .menu-item {
    position: relative; /* Necessário para o posicionamento do dropdown */
    margin-left: 20px;
  }
  
  .menu-item a {
    text-decoration: none;
    color: #ffffff;
  }
  
  /* Estilos do dropdown */
  .dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    display: block;
    min-width: 150px;
    z-index: 10;
  }
  
  .dropdown li {
    padding: 5px 20px;
  }
  
  .dropdown li a {
    text-decoration: none;
    color: #333;
  }
  
  .menu-item:hover .dropdown {
    display: block; /* Exibe o dropdown ao passar o mouse */
    transition: 500ms;
  }
  
  .menu-item a:hover {
    color: #1071da; /* Cor ao passar o mouse no item do menu */
    transition: 500ms;
  }
  
  .dropdown li a:hover {
    color: #007BFF; /* Cor ao passar o mouse no item do submenu */
    transition: 500ms;
  }
  </style>
  