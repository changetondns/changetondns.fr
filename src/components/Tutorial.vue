<script setup>
</script>

<script>
export default {
  props: ['plateforme', 'theme'],

  methods: {
    emitClick(event) {
      this.$emit('show_image', event.target.src)
    }
  }
}
</script>

<template>
  <div>
    <section v-if="plateforme == 'w-11'">
      <ol class="list-decimal px-4 text-[#2E2E2E]"  :class="{ 'text-[#FFFFFF]': !theme }">
        <li>
          Ouvrez les Paramètres Windows (touche Windows + i) et cliquez sur <span class="italic underline">Réseau et Internet</span>.
          <img class="w-full mx-auto my-10 max-w-4xl" src="@/assets/window10/reseau_internet.png" @click="emitClick($event)"/>
        </li>
        <li>
          Ouvrez les Paramètres Windows <span class="italic underline">(touche Windows + i)</span> et cliquez sur "Réseau et Internet".
          <img class="w-full mx-auto my-4 max-w-4xl" src="@/assets/window10/reseau_internet.png" @click="emitClick($event)"/>
        </li>
        <li>
          Ouvrez les Paramètres Windows <span class="italic underline">(touche Windows + i)</span> et cliquez sur "Réseau et Internet".
          <img class="w-full mx-auto my-4 max-w-4xl" src="@/assets/window10/reseau_internet.png" @click="emitClick($event)"/>
        </li>
      </ol>
    </section>
    <section v-else>
        <p>lol</p>
    </section>
  </div>
</template>
