<template>
  <header class="app-header">
    <div class="logo">
      <img src="@/assets/Logo-Oficial-Dwinfo2.png" alt="Logo" />
    </div>
    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
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
        { url: '/login', name: 'Login' }
      ]
    }
  }
}
</script>

<style scoped>
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
