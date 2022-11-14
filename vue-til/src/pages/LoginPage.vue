<template>
    <div class="login">
        <h2>로그인 페이지</h2>
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
    name: 'LoginPage',
    components: {LoginForm},
    data() {
        return {
            
        };
    },
    methods: {
    },
};
</script>

<style scoped>
</style>
