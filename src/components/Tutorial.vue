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
    <section class="p-6" v-if="plateforme === 'w-10'">
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
          Faites un clic droit sur la carte réseau (wifi ou ethernet) pour laquelle vous souhaitez changer le DNS et cliquez sur <span class="italic underline">Propriétés</span>. <br />Attention vous devez être adnimistrateur de votre machine pour effectuer cette action.
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
          Séléctionné <span class="italic underline">Utiliser l’adresse de serveur DNS suivante</span> et entrez l'adresse <span class="font-bold underline">IPv4</span> du DNS que vous souhaitez utiliser
            (par exemple pour cloudflare 1.1.1.1 et 1.0.0.1).
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window10/dns.png" @click="emitClick($event)"/>
        </li> 
        <li class="mt-10">
          Enfin, cliquez sur <span class="italic underline">OK</span>.
        </li> 
        <li class="mt-10">
          Vous avez maintenant la possibilité de configurer les adresses IPv6 du DNS, pour cela cliquez sur <span class="italic underline">Protocole Internet version 6 (TCP/IP v6)</span> puis sur <span class="italic underline">Propriétés</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window10/IPV6.png" @click="emitClick($event)"/>
        </li> 
        <li class="mt-10">
          Pour terminer, Séléctionnez <span class="italic underline">Utiliser l’adresse de serveur DNS suivante :</span> et entrez les deux adresse<span class="font-bold underline">IPv6</span> du DNS que vous souhaitez utiliser
            (par exemple pour cloudflare 2606:4700:4700::1111 et 2606:4700:4700::1001).
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window10/dnsV6.png" @click="emitClick($event)"/>
        </li> 
        <li>
          Cliquez sur <span class="italic underline">OK</span> et fermez les dernière fenétres, vous venez de changer votre DNS !
        </li>
      </ol>
    </section>

    <section class="p-6" v-if="plateforme === 'w-11'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Windows 11</p>

      <ol class="list-decimal px-4 text-[#2E2E2E] mt-12 mx-4" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Rendez vous dans les paramétres de votre systéme (touche Windows + i) puis cliquez sur <span class="italic underline">Réseau et Internet</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window11/reseau_internet.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Cliquez dans <span class="italic underline">Paramètres réseau avancés</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window11/reseau_internet.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Rendez vous dans les paramétres de votre systéme (touche Windows + i) puis cliquez sur <span class="italic underline">Réseau et Internet</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/window11/reseau_internet.png" @click="emitClick($event)"/>
        </li>
      </ol>
    </section>
    
    <section class="p-6" v-if="plateforme === 'mac'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur macOS</p>

      <ol class="list-decimal px-4 text-[#2E2E2E] mt-12 mx-4" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Cliquez sur le menu <span class="italic underline">Pomme</span> puis sur <span class="italic underline">Réglages Système</span>.
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Réseau</span> dans la barre latérale.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/mac/reglage_system.jpg" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Cliquez sur un service réseau que vous utilisez (Wi-Fi ou Ethernet) à droite.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/mac/select_reseaux.jpg" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Détails</span>.
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">DNS</span> puis sur le bouton <span class="italic underline">+</span> en bas de la liste des serveurs DNS, et saisissez les adresses IPv4 ou IPv6 du serveur DNS, ici ceux de Cloudflare.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/mac/dns.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Lorsque vous avez terminé, cliquez sur <span class="italic underline">OK</span>. Vous venez de changer vos DNS !
        </li>
      </ol>
    </section>

    <section class="p-6" v-if="plateforme === 'android-old'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Android</p>

      <ol class="list-decimal px-4 text-[#2E2E2E] mt-12 mx-4" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Ouvrez l'application <span class="italic underline">Paramètres</span> puis cliquez sur l'onglet <span class="italic underline">Wi-Fi</span>.
        </li>
        <li class="mt-10">
          Appuyez et maintenez enfoncé le nom du réseau auquel vous êtes actuellement connecté. Sélectionnez <span class="italic underline">Modifier le réseau</span>.
        </li>
        <li class="mt-10">
          Cochez la case <span class="italic underline">Afficher les options avancées</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/android_old/advanced_option.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Changez les paramètres IP en Statique.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/android_old/ip_static.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          AJoutez l’addresse IPv4 du DNS que vous souhaitez et cliquez sur <span class="italic underline">Enregistrez</span>. Vous venez de changez vos DNS !
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/android_old/dns.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Fermez l'application <span class="italic underline">Paramètre</span>, Vous venez de changez vos DNS !
        </li>
      </ol>
    </section>


    <section class="p-6" v-if="plateforme === 'ios'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Android</p>

      <ol class="list-decimal px-4 text-[#2E2E2E] mt-12 mx-4" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Ouvrez l'application <span class="italic underline">Parametre</span> > <span class="italic underline">Wi-Fi</span>, si le Wi-Fi est éteint allumez le.
        </li>
        
        <li class="mt-10">
          Choisissez le résaux Wi-Fi dans lequel vous êtes connecter et appuyez sur l’icone "i" en bleue.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/ios/i.png" @click="emitClick($event)"/>
        </li>

        <li class="mt-10">
          Décendez et sélectionner <span class="italic underline">Configurer un DNS</span>, enfin appuyez sur <span class="italic underline">Ajouter un serveur</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="@/assets/ios/add_server.png" @click="emitClick($event)"/>
        </li>

        <li class="mt-10">
          Entrez les adresses DNS que vous souhaitez et cliquez sur <span class="italic underline">Save</span>. Vous venez de changer votre DNS ! 
        </li>
      </ol>
    </section>

    <p class="text-[#2E2E2E] text-xl p-6 font-medium" :class="{ 'text-[#FFFFFF]': !theme }">
      Après avoir effectué la modification de vos DNS, il est nécessaire de procéder à une déconnexion suivie d'une reconnexion à Internet pour que les changements prennent effet. Vous pouvez cliquer sur le bouton situé en haut du site afin de vérifier si vous êtes toujours exposé aux risques des DNS menteurs !
    </p>

  </div>
</template>
