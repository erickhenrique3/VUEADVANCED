import { defineStore } from 'pinia'
import axios from 'axios'


export const useUserStore = defineStore('user', {

    state: () => ({
    email: '',
    name: '',
    code: '',
    isCodeSent: false,
    isVerified: false,
    error: '',
    }),
    
    actions: {
    async sendEmail() {
        try {
        const response = await axios.post('http://localhost:8000/api/send-email', {
            name: this.name,
            email: this.email,
        })
        this.isCodeSent = true
        this.error = ''
        console.log('Código enviado:', response.data)
        } catch (err: any) {
        this.error = err.response?.data?.message || 'Erro ao enviar email'
        this.isCodeSent = false
        }
    },

    async verifyCode() {
        try {
        const response = await axios.post('http://localhost:8000/api/verify-code', {
            email: this.email,
            code: this.code,
        })
        this.isVerified = true
        this.error = ''
        console.log('Código verificado:', response.data)
        } catch (err: any) {
        this.error = err.response?.data?.message || 'Código inválido'
        this.isVerified = false
        }
    },
   
    }
})
