<script>
import vClickOutside from 'click-outside-vue3'

export default {
    props: ['theme', 'image'],

    directives: {
      clickOutside: vClickOutside.directive
    },

    methods: {
        onClickOutside (event) {
            this.$emit('hidden')
        },
    }
}


</script>

<template>
    <div class="bg-black fixed top-0 left-0 right-0 z-20 w-full h-screen opacity-75">
    </div>

    <div class="fixed top-0 left-0 right-0 z-20 w-full h-screen">
        <div class="absolute w-full z-50">
            <div class="grid h-screen place-items-center">
                <div class="w-10/12 xl:w-2/3 mx-auto max-w-5xl">
                    <svg class="mb-2 float-right w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path class="fill-white" d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19Z"/>
                    </svg>
                    <img class="w-full border border-[#A9A9A9]" :src="image" v-click-outside="onClickOutside"/>     
                </div>
            </div>
           
        </div>
    </div>
   
</template>
