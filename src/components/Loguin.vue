<template>
  <div class="container">
    <div class="card-login">
      <h1 class="brand">ERICK VENDAS</h1>
      <transition name="fade" mode="out-in">
        <div v-if="step === 'email'" key="email" class="form">
          <h2>Fazer login</h2>
          <p>Insira seu e-mail e nome para receber um código de login</p>
					<input type="text" placeholder="Nome" v-model="userName" class="input-field" />
          <input type="email" placeholder="E-mail" v-model="email"  class="input-field" />
          <button @click="goToCodeStep">Continuar</button>
          <a href="#" class="privacy">Privacidade</a>
        </div>

        <div v-else-if="step === 'code'" key="code" class="form">
          <h2>Digite o código</h2>
          <p>Enviamos um código de 6 dígitos para seu e-mail</p>
          <div class="code-inputs">
            <input 
							v-for="(inputRef, i) in codeInputs"
								:key="i"
								type="text"
								maxlength="1"
								:ref="el => codeInputs[i] = el"
								@input="(e) => handleInput(e, i)"
						/>
          </div>
          <button @click="handleVerifyCode">Validar código</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore'
import { nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

const step = ref('email') // 'email' ou 'code'
const email = ref('')
const userName = ref('')
const codeInputs = Array.from({ length: 6 }, () => ref(null))

function goToCodeStep() {
  if (email.value.trim() !== '') {
    userStore.email = email.value
		userStore.name = userName.value
    step.value = 'code'
    handleSendCode() // Enviar o código após a validação do e-mail
    nextTick(() => codeInputs[0].value?.focus()) // Focar no primeiro input de código
  }
}

function handleInput(event, index) {
  const value = event.target.value
  if (value && index < codeInputs.length - 1) {
    codeInputs[index + 1]?.focus()
  } else if (!value && event.inputType === 'deleteContentBackward' && index > 0) {
    codeInputs[index - 1]?.focus()
  }
}

const handleSendCode = async () => {
  await userStore.sendEmail()
}

// Função para verificar o código
const handleVerifyCode = async () => {
  const code = codeInputs.map(input => input.value).join('')
  userStore.code = code // Atualiza o código na store
  await userStore.verifyCode() // Chama a ação para verificar o código
  if (userStore.isVerified) {
    redirectHome() // Redireciona para a página inicial
  }
}

function redirectHome() {
  router.push({ name: 'home' })
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.card-login {
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.form h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.form p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.input-field,
input[type="email"],
.code-inputs input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #000;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.code-inputs {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.code-inputs input {
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  padding: 0.5rem;
}

button {
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #333;
}

.privacy {
  display: block;
  margin-top: 1.5rem;
  font-size: 0.85rem;
  color: #000;
  text-decoration: none;
}

/* Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
