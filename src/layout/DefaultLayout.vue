<script setup>
import Navbar from '../components/UI/Navbar.vue';
import ProfileDropdown from '../components/UI/ProfileDropdown.vue'
</script>

<template>
    <div class="flex w-full h-full">
        <Navbar />
        <div class="sm:w-[calc(100%-288px)]">
            <div class="bg-[#f5f7fb] flex w-full items-center justify-between py-1 px-2 text-[#52a1f5]">
                <p class="text-xl font-semibold">Dashboard</p>
                <ProfileDropdown />
            </div>
            <router-view />
        </div>
    </div>
</template>