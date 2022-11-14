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
    <div>
        <label for="nickname">nickname: </label>
        <input id="nickname" type="text" v-model="nickname" />    
    </div>
    <button type="submit">signup</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { resisterUser } from '../api';

export default {
    data() {
        return {
            // form value
            username: '',
            password: '',
            nickname: '',

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
                    nickname: this.nickname
                }
                const { data } = await resisterUser(userData);
                this.logMessage = `${data.nickname}님이 가입되었습니다.`
                this.initForm();
            } catch (error) {
                console.log(error);   
            }
        },
        initForm() {
            this.username = '';
            this.password = '';
            this.nickname = '';
        },
    }
}
</script>

<style scoped>

</style>