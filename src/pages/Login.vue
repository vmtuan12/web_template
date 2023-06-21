<script setup>
import { ref } from 'vue';
import Input from '../components/UI/Input.vue';

const email = ref(null);
const password = ref(null)
const wrongEmail = ref(false)
const wrongPassword = ref(false)

</script>

<template>
    <div class="w-4/5 flex max-md:flex-col shadow-lg h-[55vh] md:max-h-96 md:min-w-[650px] md:max-w-4xl rounded-xl overflow-hidden bg-gradient-to-r from-[#52a1f5] to-[#39c0c8]">
        <div class="md:hidden w-full bg-gradient-to-r from-[#52a1f5] to-[#39c0c8] h-full flex items-center justify-center text-2xl font-bold text-white">
            Welcome back
        </div>
        <form class="flex flex-col justify-between items-center bg-white md:p-12 max-md:px-14 max-sm:px-8 max-[400px]:px-4 max-md:py-10 max-md:space-y-4 w-full md:w-3/5 max-md:rounded-tl-[3rem]">
            <p class="text-2xl max-[400px]:text-xl text-[#52a1f5] font-bold text-center">Sign in to Dashboard</p>
            <div class="w-full">
                <p class="font-bold text-[#1d1d1d] text-sm">Email</p>
                <Input :error="wrongEmail" border-color="blue" type="text" placeholder="Enter your email..." class="w-full mb-4"/>
                <p class="font-bold text-[#1d1d1d] text-sm">Password</p>
                <Input border-color="blue" type="password" placeholder="Enter your password..." class="w-full mb-4"/>
            </div>
            <button 
                @click.prevent=""
                class="relative group font-semibold text-white flex justify-center items-center bg-[#52a1f5] overflow-hidden px-7 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-[#3d96f5] active:bg-[#2d8ef7]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6 ml-1 absolute transition-transform duration-300 ease-in-out -translate-x-20 group-hover:-translate-x-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
                <p class="transition-transform duration-300 ease-in-out group-hover:translate-x-20">Login</p>
            </button>
        </form>
        <div class="px-10 py-5 space-y-6 text-center flex text-white flex-col justify-center items-center bg-gradient-to-tr hover:bg-gradient-to-bl w-2/5 max-md:hidden">
            <p class="font-bold text-3xl">Welcome back</p>
            <p class="text-lg font-light">Enter your personal information and start your journey with us</p>
            <RouterLink to="/auth/register">
                <button class="rounded-full font-medium transition-all duration-300 ease-in-out px-5 py-2 border-2 border-solid border-white hover:px-7 hover:tracking-wider">
                    Register
                </button>
            </RouterLink>
        </div>
    </div>
</template>