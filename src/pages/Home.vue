<script setup>
import Button from '../components/UI/Button.vue';
import Input from '../components/UI/Input.vue';

const action = () => {
    console.log('clicked');
};
</script>

<template>
    <div class="ml-2">
        <Button 
            @click="action"
            bg-color="danger"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
            minh tuan
        </Button>
        <p class="font-normal">minh tuan</p>
        <Input border-radius="md" border-weight="medium" type="text"/>
    </div>
</template>

<style scoped>
      
</style>