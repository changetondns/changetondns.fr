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
    <section class="p-6" v-if="plateforme == 'w-10'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Windows 10</p>
      <ol class="list-decimal px-4 text-[#2E2E2E] mt-12 mx-4" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Rendez vous dans les paramétres de votre systéme (touche Windows + i) puis cliquez sur <span class="italic underline">Réseau et Internet</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window10/reseau_internet.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Une fois que vous êtes dans l'onglet <span class="italic underline">État</span>, cliquez sur <span class="italic underline">Modifier les options d’adapteur</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window10/adapter_settings.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Faites un clic droit sur la carte réseau (wifi ou ethernet) dont vous souhaitez changer le DNS, puis cliquez sur <span class="italic underline">Propriétés</span>. <br />Attention vous devez être adnimistrateur de votre machine pour effectuer cette action.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window10/Properties.png" @click="emitClick($event)"/>
        </li>
        <li>
          Cliquez sur <span class="italic underline">Oui</span>.
        </li>
        <li class="mt-10">
          Dans la nouvelle fenétre, cliquez sur <span class="italic underline">Protocole Internet version 4 (TCP/IP v4)</span> puis sur <span class="italic underline">Propriétés</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window10/IPV4.png" @click="emitClick($event)"/>
        </li> 
        <li class="mt-10">
          Enfin séléctionné <span class="italic underline">Utiliser l’adresse de serveur DNS suivante</span> et entrez l'adresse IPv4 du DNS que vous souhaitez utiliser (ici les DNS IPv4 de Cloudflare soit 1.1.1.1 et 1.0.0.1).
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window10/dns.png" @click="emitClick($event)"/>
        </li> 
        <li class="mt-10">
          Pour terminer cliquez sur <span class="italic underline">OK</span> et fermez les dérnière fenétres. Vous venez de changer vos DNS !
        </li> 
      </ol>
      <p class="text-[#2E2E2E] text-xl mt-8 font-medium" :class="{ 'text-[#FFFFFF]': !theme }">
        Après avoir effectué la modification de vos DNS, il est nécessaire de procéder à une déconnexion suivie d'une reconnexion à Internet pour que les changements prennent effet. Vous pouvez cliquer sur le bouton situé en haut du site afin de vérifier si vous êtes toujours exposé aux risques de DNS menteurs !
        <br />
        <br />
        Nous vous recommandons d'utiliser Cloudflare comme DNS en raison de sa rapidité et de sa fiabilité, ou FDN pour bénéficier d'une transparence totale et d'une absence de censure.
        </p>
    </section>




    <section v-else>
        <p>lol</p>
    </section>
  </div>
</template>
