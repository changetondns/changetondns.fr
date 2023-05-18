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
            <div class="flex items-center justify-center h-screen">
                <div class="max-h-screen p-8 overflow-hidden overflow-y-auto">
                    <img class="object-cover my-auto" :src="image" v-click-outside="onClickOutside"/>   
                </div>
            </div>
        </div>
    </div>
</template>
