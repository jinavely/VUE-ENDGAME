<template>
  <form @submit.prevent="submitForm">
    <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username" />    
    </div>
    <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password" />    
    </div>
    <button type="submit">login</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '../api';

export default {
    data() {
        return {
            // form value
            username: '',
            password: '',

            // log
            logMessage: ''
        }
    },
    methods: {
        async submitForm() {
            try {
                const userData = {
                    username: this.username,
                    password: this.password,
                }
                const { data } = await loginUser(userData);
                this.logMessage = `${data.user.username} 님 환영합니다.`;
                this.initForm();
            } catch (error) {
                console.log(error);
            }
            
        },
        initForm() {
            this.username = '';
            this.password = '';
        }
    }
}
</script>

<style>

</style>