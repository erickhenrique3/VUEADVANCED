<template>
    <div class="subheader">
      <h2 class="title">CONHEÇA NOSSOS PRODUTOS</h2>
      <nav class="nav">
        <ul>
          <li 
            v-for="(category, index) in categories" 
            :key="index"
            :class="{ active: selectedCategory === index }"
            @click="selectedCategory = index"
          >
            {{ category }}
            <span class="underline" :style="{ transform: `scaleX(${selectedCategory === index ? 1 : 0})` }"></span>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: ["BONÉS", "TÊNIS", "CAMISETAS DE TIMES", "SHORTS"],
        selectedCategory: 0,
      };
    },
  };
  </script>
  
  <style scoped>
  .subheader {
    text-align: center;
    margin: 20px 0;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    border-bottom: 1px solid #ccc;
  }
  
  .nav li {
    position: relative;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    color: #444;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .nav li:hover,
  .nav li.active {
    color: black;
  }
  
  .nav li .underline {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: black;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  </style>
  