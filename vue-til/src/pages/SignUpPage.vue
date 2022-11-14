<template>
    <div class="signup">
        <h2>회원 가입 페이지</h2>
        <SignUpForm />
    </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue';


export default {
    name: 'SignUpPage',
    components: { SignUpForm },
    data() {
        return {
            todoItems: []
        };
    },
    methods: {
    },
};
</script>

<style scoped></style>
