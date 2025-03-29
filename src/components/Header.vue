<template>
  <header class="header">
    <!-- Lado esquerdo: Nome ou Imagem da Loja -->
    <div class="logo">
      <img v-if="false" :src="logo" alt="Logo" class="logo-image" />
      <span v-else class="store-name">{{ storeName }}</span>
    </div>

    <!-- Lado direito: Ícones de Ações -->
    <div class="actions">
      <button @click="searchClicked">
        <i class="fas fa-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 256 256">
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z">
            </path>
          </svg>
        </i>
      </button>
      <button @click="cartClicked">
        <i class="fas fa-shopping-cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 256 256">
            <path d="M104,216a16,16,0,1,1-16-16A16,16,0,0,1,104,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,192,200ZM239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM221.47,80H61.64l22.81,82.14A8,8,0,0,0,92.16,168H191a8,8,0,0,0,7.71-5.86Z">
          </path>
        </svg>
        </i>
      </button>
      <button @click="profileClicked">
        <i class="fas fa-user">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" viewBox="0 0 256 256">
            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z">
          </path>
        </svg>
        </i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    storeName: {
      type: String,
      required: false,
      default: "Garoto de Programa"
    },
    logo: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    searchClicked() {
      console.log("Pesquisa clicada");
      // Lógica para pesquisa
    },
    cartClicked() {
      console.log("Carrinho clicado");
      // Lógica para o carrinho
    },
    profileClicked() {
      console.log("Perfil clicado");
      // Lógica para o perfil
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: black;
  height: 90px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.store-name {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.actions button {
  background: none;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: 20px;
  color: #ffffff;
  transition: color 0.3s;
}

.actions button:hover {
  color: #494949;
}

.actions i {
  font-size: 20px;
}
</style>
