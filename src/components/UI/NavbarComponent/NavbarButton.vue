<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['content', 'to']);
</script>

<template>
    <RouterLink 
        :to="props.to"
        class="w-full rounded-3xl flex items-center space-x-2 cursor-pointer px-4 py-3 transition-all duration-200 ease-in-out hover:bg-white hover:shadow"
    >
    </RouterLink>
</template>