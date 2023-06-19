<script setup>
import Navbar from '../components/UI/Navbar.vue';
</script>

<template>
    <div class="flex w-full h-full">
        <Navbar />
        <router-view />
    </div>
</template>