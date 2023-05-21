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
  <div class="p-4 md:p-6">
    <section v-if="plateforme === 'w-10'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Windows 10</p>

      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Rendez-vous dans les paramètres de votre système (touche Windows + i) puis cliquez sur <span class="italic underline">Réseau et Internet</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="/window10/reseau_internet.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Une fois que vous êtes dans l'onglet <span class="italic underline">État</span>, cliquez sur <span class="italic underline">Modifier les options d’adapteur</span>.
          <img class="w-auto mx-auto my-10 object-contain" src="/window10/adapter_settings.png" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Faites un clic droit sur la carte réseau (Wi-Fi ou Ethernet) pour laquelle vous souhaitez changer le DNS et cliquez sur <span class="italic underline">Propriétés</span>. <br />Attention vous devez être administrateur de votre machine pour effectuer cette action.
          <img class="w-auto mx-auto my-10 object-contain" src="/window10/Properties.png" @click="emitClick($event)"/>
        </li>
        <li>
          Cliquez sur <span class="italic underline">Oui</span>.
        </li>
        <li class="mt-10">
          Dans la nouvelle fenêtre, cliquez sur <span class="italic underline">Protocole Internet version 4 (TCP/IP v4)</span> puis sur <span class="italic underline">Propriétés</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window10/IPV4.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Sélectionnez <span class="italic underline">Utiliser l’adresse de serveur DNS suivante</span> et entrez l'adresse <span class="font-bold underline">IPv4</span> du DNS que vous souhaitez utiliser
            (par exemple pour cloudflare 1.1.1.1 et 1.0.0.1).
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window10/dns.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Enfin, cliquez sur <span class="italic underline">OK</span>.
        </li>
        <li class="mt-10">
          Vous avez maintenant la possibilité de configurer les adresses IPv6 du DNS, pour cela cliquez sur <span class="italic underline">Protocole Internet version 6 (TCP/IP v6)</span> puis sur <span class="italic underline">Propriétés</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window10/IPV6.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Pour terminer, sélectionnez <span class="italic underline">Utiliser l’adresse de serveur DNS suivante :</span> et entrez les deux adresses <span class="font-bold underline">IPv6</span> du DNS que vous souhaitez utiliser
            (par exemple pour cloudflare 2606:4700:4700::1111 et 2606:4700:4700::1001).
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window10/dnsV6.png'" @click="emitClick($event)"/>
        </li>
        <li>
          Cliquez sur <span class="italic underline">OK</span> et fermez les dernières fenêtres, vous venez de changer votre DNS !
        </li>
      </ol>
    </section>

    <section v-if="plateforme === 'w-11'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Windows 11</p>

      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Rendez-vous dans les paramètres de votre système (touche Windows + i) puis cliquez sur <span class="italic underline">Réseau et Internet</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window11/reseau_internet.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
            Choisissez le réseau que vous utilisez <span class="italic underline">(Wi-Fi / Ethernet)</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window11/wifi_ethernet.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Propriétés du matériel</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window11/matériel_prop.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Modifier</span> dans la partie attribution du serveur DNS.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window11/modifier_dns.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Dans la nouvelle fenêtre changez <span class="italic underline">Automatique</span> par <span class="italic underline">Manuel</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window11/Manuel.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
            Activez le boutton <span class="italic underline">IPv4</span> et rentrez les addresses IP des DNS que vous avez choisi.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window11/dns_IPv4.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Faites de même pour <span class="italic underline">l’IPv6</span>  si vous le souhaitez.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/window11/dns_IPv6.png'" @click="emitClick($event)"/>
        </li>
        <li>
            Pour terminer cliquez sur <span class="italic underline">Enregistrer</span> et fermez les dernières fenêtres.
            Vous venez de changer vos DNS!
        </li>
      </ol>
    </section>

    <section v-if="plateforme === 'android-new'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Android 9.0 Pie ou +</p>

      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Allez dans l'application <span class="italic underline">Paramètres</span> puis dans <span class="italic underline">Connexion & Partage</span>.<br /><br />
          <span class="font-bold">Attention</span> : la manipulation change selon la version d'Android, vous pouvez utiliser <a href="https://play.google.com/store/apps/details?id=com.frostnerd.dnschanger" target="_blank" class="text-blue-400"> cette application pour une manipulation universelle</a>.
          <img class="w-auto mx-auto my-10 object-contain max-h-[46rem]" :src="'/android new/main_settings.png'" @click="emitClick($event)"/>
        </li>

        <li class="mt-10">
          Sélectionnez <span class="italic underline">DNS privé</span>.
          <img class="w-auto mx-auto my-10 object-contain max-h-[46rem]" :src="'/android new/dns_settings.png'" @click="emitClick($event)"/>
        </li>

        <li class="mt-10">
          Sélectionnez ensuite <span class="italic underline">Nom d’hote du fournisseur de DNS privé</span>.
          <img class="w-auto mx-auto my-10 object-contain max-h-[46rem]" :src="'/android new/dns.png'" @click="emitClick($event)"/>
        </li>

        <li class="mt-10">
          Entrez le nom d'hôte du DNS, voici une liste de noms d'hôtes correspond au fournisseur DNS du tableau :<br /><br />
          Cloudflare : 1dot1dot1dot1.cloudflare-dns.com<br />
          Quad9 : dns.quad9.net<br />
          FDN : ns1.fdn.fr<br />
          Google DNS : dns.google<br />
          AdGuard: dns.adguard.com<br />
        </li>

        <li class="mt-10">
          Appuyez sur <span class="italic underline">Enregistrer</span>. Vous venez de changer vos DNS !
        </li>
      </ol>
    </section>

    <section v-if="plateforme === 'mac'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur macOS</p>

      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Cliquez sur le menu <span class="italic underline">Pomme</span> puis sur <span class="italic underline">Réglages Système</span>.
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Réseau</span> dans la barre latérale.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/mac/reglage_system.jpg'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Cliquez sur un service réseau que vous utilisez (Wi-Fi ou Ethernet) à droite.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/mac/select_reseaux.jpg'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Détails</span>.
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">DNS</span> puis sur le bouton <span class="italic font-bold">+</span> en bas de la liste des serveurs DNS, et saisissez les adresses IPv4 ou IPv6 du serveur DNS, ici ceux de Cloudflare.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/mac/dns.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Lorsque vous avez terminé, cliquez sur <span class="italic underline">OK</span>. Vous venez de changer vos DNS !
        </li>
      </ol>
    </section>

    <section v-if="plateforme === 'android-old'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Android</p>

      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Ouvrez l'application <span class="italic underline">Paramètres</span> puis cliquez sur l'onglet <span class="italic underline">Wi-Fi</span>.<br /><br />
            <span class="font-bold">Attention</span>: la manipulation change selon la version d'Android, vous pouvez utiliser <a href="https://play.google.com/store/apps/details?id=com.frostnerd.dnschanger" target="_blank" class="text-blue-400"> cette application pour une manipulation universelle</a>.
        </li>
        <li class="mt-10">
          Appuyez et maintenez enfoncé le nom du réseau auquel vous êtes actuellement connecté. Sélectionnez <span class="italic underline">Modifier le réseau</span>.
        </li>
        <li class="mt-10">
          Cochez la case <span class="italic underline">Afficher les options avancées</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/android_old/advanced_option.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Changez les paramètres IP en statique.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/android_old/ip_static.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Ajoutez l’adresse IPv4 du DNS que vous souhaitez et cliquez sur <span class="italic underline">Enregistrez</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/android_old/dns.png'" @click="emitClick($event)"/>
        </li>
        <li class="mt-10">
          Fermez l'application <span class="italic underline">Paramètre</span>, vous venez de changer vos DNS !
        </li>
      </ol>
    </section>


    <section v-if="plateforme === 'ios'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur iOS/iPadOS</p>

      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Ouvrez l'application <span class="italic underline">Paramètre</span> > <span class="italic underline">Wi-Fi</span>, si le Wi-Fi est éteint allumez-le.
        </li>

        <li class="mt-10">
          Choisissez le réseau Wi-Fi dans lequel vous êtes connecté et appuyez sur l’icône "i" en bleue.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/IOS/step-1.jpg'" @click="emitClick($event)"/>
        </li>
        
        <li class="mt-10">
          Descendez jusqu'à voir la catégorie DNS.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/IOS/step-2.jpg'" @click="emitClick($event)"/>
        </li>
        
        <li class="mt-10">
          Descendez et sélectionnez <span class="italic underline">Configurer un DNS</span>, enfin appuyez sur <span class="italic underline">Ajouter un serveur</span>.
          <img class="w-auto mx-auto my-10 object-contain" :src="'/IOS/step-3.jpg'" @click="emitClick($event)"/>
        </li>

        <li class="mt-10">
          Entrez les adresses DNS que vous souhaitez et cliquez sur <span class="italic underline">Save</span>. Vous venez de changer votre DNS !
        </li>
      </ol>
    </section>

    <section v-if="plateforme === 'ubuntu'">
        <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Ubuntu</p>

        <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
            <li class="mt-10">
                Rendez-vous dans les paramètres de votre système puis cliquez sur l'onglet du réseau que vous utilisez <span class="italic underline">(Réseau ou Wifi)</span>.
                <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/ubuntu/reseau_internet.png'" @click="emitClick($event)"/>
            </li>
            <li class="mt-10">
                Cliquez sur l'icône paramètre du réseau que vous utilisez <span class="italic">(Wi-Fi ou Filaire)</span>.
                <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/ubuntu/wifi_ethernet.png'" @click="emitClick($event)"/>
            </li>
            <li class="mt-10">
                Rendez-vous dans l'onglet <span class="italic underline">IPv4</span> et rentrez les addresses IP des DNS que vous avez choisi.
                <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/ubuntu/dns_IPv4.png'" @click="emitClick($event)"/>
            </li>
            <li class="mt-10">
                Faites de même pour <span class="italic underline">l’IPv6</span>  si vous le souhaitez.
                <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/ubuntu/dns_IPv6.png'" @click="emitClick($event)"/>
            </li>
            <li>
                Pour terminer cliquez sur <span class="italic underline">Appliquer</span> et fermez la dernière fenêtre.
                Vous venez de changer vos DNS!
            </li>
        </ol>
    </section>

    <p class="text-[#2E2E2E] text-xl p-6 font-medium" :class="{ 'text-[#FFFFFF]': !theme }">
      Après avoir effectué la modification de vos DNS, il est nécessaire de procéder à une déconnexion suivie d'une reconnexion à Internet pour que les changements prennent effet. Vous pouvez cliquer sur le bouton situé en haut du site afin de vérifier si vous êtes toujours exposé aux risques des DNS menteurs !
    </p>

  </div>
</template>
