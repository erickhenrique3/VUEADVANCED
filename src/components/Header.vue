<template>
  <header class="header">
    <!-- Lado esquerdo: Nome ou Imagem da Loja -->
    <div class="logo">
      <img v-if="logo" :src="logo" alt="Logo" class="logo-image" />
      <span v-else class="store-name">{{ storeName }}</span>
    </div>

    <!-- Lado direito: Ícones de Ações -->
    <div class="actions">
      <button @click="searchClicked">
        <i class="fas fa-search"></i>
      </button>
      <button @click="cartClicked">
        <i class="fas fa-shopping-cart"></i>
      </button>
      <button @click="profileClicked">
        <i class="fas fa-user"></i>
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
      default: "Minha Loja"
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
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
  color: #333;
}

.actions button {
  background: none;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  transition: color 0.3s;
}

.actions button:hover {
  color: #6347c7;
}

.actions i {
  font-size: 20px;
}
</style>
