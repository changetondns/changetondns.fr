<script setup>
</script>

<script>
export default {
  props: ['plateforme', 'theme']
}
</script>

<template>
  <div class="h-96">
    <section v-if="plateforme == 'w-11'">
        <p class="text-[#1C1C1C] font-bold text-xl" :class="{ 'text-[#DBDBDB]': !theme }">Changer de DNS sur Windows 11.</p>
    </section>
    <section v-else>
        <p>lol</p>
    </section>
  </div>
</template>
