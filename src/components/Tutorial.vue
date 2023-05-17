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
        <p class="text-[#1C1C1C] font-bold text-xl" :class="{ 'text-[#DBDBDB]': !theme }">Changer de DNS sur Windows 11.</p>
        <img class="w-full border border-white" src="@/assets/window10/reseau_internet.png" @click="emitClick($event)"/>
    </section>
    <section v-else>
        <p>lol</p>
    </section>
  </div>
</template>
