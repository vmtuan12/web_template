<script setup>
import { computed, onBeforeMount, onMounted, onUnmounted, ref, watch } from 'vue';
import Navbar from '../components/UI/Navbar.vue';
import ProfileDropdown from '../components/UI/ProfileDropdown.vue'

const smallBar = ref(false)

const main = ref()
const scrollPosition = ref(window.scrollY)

const handleScroll = () => {
    scrollPosition.value = main.value.scrollTop
}

window.addEventListener('scroll', handleScroll)

onBeforeMount(() => {
    if(window.innerWidth <= 640) {
        smallBar.value = true
    }
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div class="flex w-full h-full">
        <Navbar @handle-bar-size="smallBar = !smallBar" :smallbar="smallBar" />
        <div ref="main" @scroll="handleScroll" class="bg-[#f5f7fb] transition-all duration-500 ease-in-out sm:px-4 pb-4 overflow-x-hidden max-h-screen" :class="smallBar ? 'px-1 w-full' : 'w-0 sm:w-full'">
            <div class="flex w-full items-center justify-between py-4 sticky top-0 transition-all duration-500 ease-in-out" :class="scrollPosition > 0 ? 'bg-[#52a1f5] text-white px-4 shadow-lg rounded-b-2xl' : 'bg-[#f5f7fb] text-[#52a1f5]'">
                <p class="text-xl font-bold ml-1">Tuan dep trai</p>
                <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 p-3 text-[#1d1d1d] cursor-pointer rounded-lg bg-white">
                        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                    </svg>
                    <ProfileDropdown />
                </div>
            </div>
            <router-view/>
        </div>
    </div>
</template>