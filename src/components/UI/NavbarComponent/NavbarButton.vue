<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps(['content', 'to', 'smallbar']);

const route = useRoute()

const routeMatched = computed(() => {
    if(route.fullPath === props.to) {
        return true
    } else {
        return false
    }
});
</script>

<template>
    <RouterLink 
        :to="props.to"
        class="w-full rounded-lg flex items-center transition-all duration-200 ease-in-out overflow-hidden"
        :class="routeMatched ? 'text-[#52a1f5]' : 'hover:bg-[#52a1f5]/70 hover:text-white hover:shadow-md', smallbar ? 'py-2 pl-2.5' : 'px-4 py-3 space-x-2'"
    >
    <div class="min-w-fit">

        <slot></slot>
    </div>
        <p class="font-semibold text-base mt-1 transition-all duration-[0] ease-in-out" :class="smallbar ? 'opacity-0 w-0' : 'opacity-100'">{{ content }}</p>
    </RouterLink>
</template>