<script setup>
import { ref } from 'vue';
import Button from '../components/UI/Button.vue';
import Pagination from '../components/UI/Pagination.vue';
import Table from '../components/UI/Table.vue';
const action = () => {
    console.log('clicked');
};

const header = ref([
    {
        content: 'Col 1',
        colWidth: 'min-w-[7rem]',
        align: 'text-left',
        key: 'c1'
    },
    {
        content: 'Col 2',
        colWidth: 'min-w-[15rem]',
        align: 'text-left',
        key: 'c2'
    },
    {
        content: 'Col 3',
        colWidth: 'min-w-[12rem]',
        align: 'text-center',
        key: 'c3'
    },
    {
        content: 'Col 4',
        colWidth: 'min-w-[12rem]',
        align: 'text-left',
        key: 'c4'
    },
    {
        content: 'Col 5',
        colWidth: 'min-w-[200px]',
        align: 'text-right',
        key: 'c5'
    },
]);

const data = ref([
    {
        c1: '111111111111111111111111111111111',
        c2: 'Một hai ba bốn năm sáu bảy tám chín',
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
    {
        c1: 1,
        c2: 2,
        c3: 3,
        c4: 4,
        c5: 5,
    },
]);

const pageNumber = ref(1)
const totalPage = ref(25);

const navigatePage = (page) => {
    pageNumber.value = page
};
</script>

<template>
    <div class="bg-white rounded-xl shadow flex flex-col items-center space-y-4 pb-4">
        <Table
            name="MTHP"
            max-height="max-h-[20rem]"
            row-min-height="h-[4rem]"
            :header="header"
            :data="data"
        >
            <template #action-header>

            </template>
            <template #action>
                <Button bg-color="ea" border-radius="xxxl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Action
                </Button>
            </template>
        </Table>
        <Pagination :current-page="pageNumber" :total-page="totalPage" @navigate="navigatePage"/>
    </div>
</template>

<style scoped>
      
</style>