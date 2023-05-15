<script setup>
</script>

<script>
export default {
  props: ['data', 'theme'],
  watch: {
    theme(newTheme) {
      console.log('Nouveau thème :', newTheme);
    }
  }
}
</script>

<template>
    <div class="flex flex-nowrap max-w-xl mx-auto">
        <div class="mx-auto">
            <p class="text-white text-center text-2xl font-bold" :class="{ 'text-[#1E1E1E]': theme }">Fournisseur</p>
            <p class="text-[#686868] text-center text-xl font-medium overflow-hidden truncate max-w-[200px]" :class="{ 'text-[#9A9A9A]': !theme }">{{ data.name }}</p>
        </div>
        <div class="mx-auto">
            <p class="text-[#1E1E1E] text-center text-2xl font-bold" :class="{ 'text-white': !theme }">Serveur DNS</p>
            <p class="text-[#686868] text-center text-xl font-medium overflow-hidden truncate max-w-[200px]" :class="{ 'text-[#9A9A9A]': !theme }">{{  data.ip }}</p>
        </div>
     </div>
 
     <p class="text-[#EC0000] text-center text-2xl max-w-2xl mx-auto font-medium mt-4" :class="{ 'text-[#F55C5C]': !theme }" v-if="data.name in ['Bouygtel']">
         Vulnérable.
     </p>
     <p class="text-[#21FF1D] text-center text-2xl max-w-2xl mx-auto font-medium mt-4" :class="{ 'text-[#85FC82]': !theme }" v-else>
         Non Vulnérable
     </p>
 </template>
 