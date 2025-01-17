<template>
    <div class="carousel">
      <!-- Contêiner do Carousel -->
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div
          class="carousel-item"
          v-for="(item, index) in items"
          :key="index"
        >
          <img :src="item.image" :alt="item.alt"/>
        </div>
      </div>
  
      <!-- Botões de Navegação -->
      <button class="prev" @click="prevSlide">❮</button>
      <button class="next" @click="nextSlide">❯</button>
  
      <!-- Indicadores -->
      <div class="indicators">
        <span
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
    data() {
      return {
        currentIndex: 0, // Índice atual
        items: [
          { image: require("@/assets/image1.jpg"), alt: "Slide 1" },
          { image: require("@/assets/image1.jpg"), alt: "Slide 1" },
          { image: require("@/assets/image3.jpg"), alt: "Slide 3" },
          { image: require("@/assets/image3.jpg"), alt: "Slide 3" }
        ],
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo geral do Carousel */
  .carousel {
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  
  /* Contêiner dos slides */
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
  }
  
  /* Estilo dos itens */
  .carousel-item {
    flex: 0 0 100%;
    text-align: center;
  }
  
  .carousel-item img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  /* Botões de navegação */
  button.prev,
  button.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  
  button.prev {
    left: 10px;
  }
  
  button.next {
    right: 10px;
  }
  
  button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  
  /* Indicadores */
  .indicators {
    text-align: center;
    margin-top: 10px;
  }
  
  .indicators span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #ddd;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .indicators span.active {
    background: #007bff;
  }
  </style>
  