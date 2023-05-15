<script>
export default {
props: ['data', 'theme'],
methods: {
    toggleTheme() {
    this.theme = !this.theme; // Inverser la valeur de 'theme' à chaque clic sur le bouton
    }
}
}
</script>
  

<template>
<div class="flex flex-nowrap max-w-xl mx-auto">
    <div class="mx-auto">
    <p :class="[{'text-white': theme}, {'text-[#1E1E1E]': !theme}]" class="text-center text-2xl font-bold">Fournisseur</p>
    <p :class="[{'text-[#686868]': !theme}, {'text-[#9A9A9A]': theme}]" class="text-center text-xl font-medium overflow-hidden truncate max-w-[200px]">{{ data.name }}</p>
    </div>
    <div class="mx-auto">
    <p :class="[{'text-[#1E1E1E]': theme}, {'text-white': !theme}]" class="text-center text-2xl font-bold">Serveur DNS</p>
    <p :class="[{'text-[#686868]': !theme}, {'text-[#9A9A9A]': theme}]" class="text-center text-xl font-medium overflow-hidden truncate max-w-[200px]">{{ data.ip }}</p>
    </div>
</div>

<p :class="[{'text-[#EC0000]': theme, 'text-[#F55C5C]': !theme}]" class="text-center text-2xl max-w-2xl mx-auto font-medium mt-4" v-if="data.name in ['Bouygtel']">
    Vulnérable.
</p>
<p :class="[{'text-[#21FF1D]': theme, 'text-[#85FC82]': !theme}]" class="text-center text-2xl max-w-2xl mx-auto font-medium mt-4" v-else>
    Non Vulnérable
</p>

<button @click="toggleTheme">Changer de thème</button>
</template>
  
