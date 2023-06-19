<script setup>
import NavbarButton from './NavbarComponent/NavbarButton.vue';
import { PageList } from './NavbarComponent/PageDetail.js';
</script>

<template>
    <div class="w-72 border-r border-solid border-gray-200 h-screen bg-[#f5f7fb] rounded-br-3xl p-4">
        <div class="w-full flex justify-end mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6 text-[#39c0c8] cursor-pointer transition-transform duration-500 hover:[transform:rotate(360deg)]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
            </svg>
        </div>
        <div class="flex flex-col space-y-2">
            <NavbarButton 
                v-for="page in PageList" :key="page.link" 
                :content="page.name"
                v-html="`${page.icon} ${page.name}`"
                :to="page.link"
            />
        </div>
    </div>
</template>