<template>
    <header class="app-header">
      <div class="logo">
        <img src="logo.png" alt="Logo" />
        <h1>{{ title }}</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
</template>
  
<script>
export default {
    name: "AppHeader",
    props: {
        title: {
        type: String,
        default: "Meu Site",
        }
    }
}
</script>
  
<style>
    .app-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #333;
        color: white;
    }
    
    .logo {
        display: flex;
        align-items: center;
    }
    
    .logo img {
        height: 40px;
        margin-right: 10px;
    }
    
    nav ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    nav ul li {
        margin: 0 15px;
    }
    
    nav ul li a {
        color: white;
        text-decoration: none;
    }
    
    nav ul li a:hover {
        text-decoration: underline;
    }
  </style>
  