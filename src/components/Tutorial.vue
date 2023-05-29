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
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" src="/window10/reseau_internet.png" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Une fois que vous êtes dans l'onglet <span class="italic underline">État</span>, cliquez sur <span class="italic underline">Modifier les options d’adapteur</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" src="/window10/adapter_settings.png" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Faites un clic droit sur la carte réseau (Wi-Fi ou Ethernet) pour laquelle vous souhaitez changer le DNS et cliquez sur <span class="italic underline">Propriétés</span>. <br />Attention vous devez être administrateur de votre machine pour effectuer cette action.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" src="/window10/Properties.png" @click="emitClick($event)"/>
          </div>
        </li>
        <li>
          Cliquez sur <span class="italic underline">Oui</span>.
        </li>
        <li class="mt-10">
          Dans la nouvelle fenêtre, cliquez sur <span class="italic underline">Protocole Internet version 4 (TCP/IP v4)</span> puis sur <span class="italic underline">Propriétés</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window10/IPV4.png'" @click="emitClick($event)"/>
          </div>
        </li> 
        <li class="mt-10">
          Sélectionnez <span class="italic underline">Utiliser l’adresse de serveur DNS suivante</span> et entrez l'adresse <span class="font-bold underline">IPv4</span> du DNS que vous souhaitez utiliser
            (par exemple pour cloudflare 1.1.1.1 et 1.0.0.1).
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window10/dns.png'" @click="emitClick($event)"/>
          </div>
        </li> 
        <li class="mt-10">
          Enfin, cliquez sur <span class="italic underline">OK</span>.
        </li> 
        <li class="mt-10">
          Vous avez maintenant la possibilité de configurer les adresses IPv6 du DNS, pour cela cliquez sur <span class="italic underline">Protocole Internet version 6 (TCP/IP v6)</span> puis sur <span class="italic underline">Propriétés</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window10/IPV6.png'" @click="emitClick($event)"/>
          </div>
        </li> 
        <li class="mt-10">
          Pour terminer, sélectionnez <span class="italic underline">Utiliser l’adresse de serveur DNS suivante :</span> et entrez les deux adresses <span class="font-bold underline">IPv6</span> du DNS que vous souhaitez utiliser
            (par exemple pour cloudflare 2606:4700:4700::1111 et 2606:4700:4700::1001).
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window10/dnsV6.png'" @click="emitClick($event)"/>
          </div>
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
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window11/reseau_internet.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
            Choisissez le réseau que vous utilisez <span class="italic underline">(Wi-Fi / Ethernet)</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window11/wifi_ethernet.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Propriétés du matériel</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window11/matériel_prop.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Modifier</span> dans la partie attribution du serveur DNS.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window11/modifier_dns.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Dans la nouvelle fenêtre changez <span class="italic underline">Automatique</span> par <span class="italic underline">Manuel</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window11/Manuel.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
            Activez le boutton <span class="italic underline">IPv4</span> et rentrez les addresses IP des DNS que vous avez choisi.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window11/dns_IPv4.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Faites de même pour <span class="italic underline">l’IPv6</span>  si vous le souhaitez.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/window11/dns_IPv6.png'" @click="emitClick($event)"/>
          </div>
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
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto mx-auto my-10 object-contain max-h-[46rem] max-w-4xl" :src="'/android new/main_settings.png'" @click="emitClick($event)"/>
          </div>
        </li>

        <li class="mt-10">
          Sélectionnez <span class="italic underline">DNS privé</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto mx-auto my-10 object-contain max-h-[46rem]" :src="'/android new/dns_settings.png'" @click="emitClick($event)"/>
          </div>
        </li>

        <li class="mt-10">
          Sélectionnez ensuite <span class="italic underline">Nom d’hote du fournisseur de DNS privé</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto mx-auto my-10 object-contain max-h-[46rem]" :src="'/android new/dns.png'" @click="emitClick($event)"/>
          </div>
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
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/mac/reglage_system.jpg'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Cliquez sur un service réseau que vous utilisez (Wi-Fi ou Ethernet) à droite.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/mac/select_reseaux.jpg'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">Détails</span>.
        </li>
        <li class="mt-10">
          Cliquez sur <span class="italic underline">DNS</span> puis sur le bouton <span class="italic font-bold">+</span> en bas de la liste des serveurs DNS, et saisissez les adresses IPv4 ou IPv6 du serveur DNS, ici ceux de Cloudflare.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/mac/dns.png'" @click="emitClick($event)"/>
          </div>
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
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/android_old/advanced_option.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Changez les paramètres IP en statique.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/android_old/ip_static.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Ajoutez l’adresse IPv4 du DNS que vous souhaitez et cliquez sur <span class="italic underline">Enregistrez</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/android_old/dns.png'" @click="emitClick($event)"/>
          </div>
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

          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/ios/step-1.jpg'" @click="emitClick($event)"/>
          </div>
        </li>
        
        <li class="mt-10">
          Descendez jusqu'à voir la catégorie DNS.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto mx-auto my-10 object-contain" :src="'/ios/step-2.jpg'" @click="emitClick($event)"/>
          </div>
        </li>
        
        <li class="mt-10">
          Descendez et sélectionnez <span class="italic underline">Configurer un DNS</span>, enfin appuyez sur <span class="italic underline">Ajouter un serveur</span>.

          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/ios/step-3.jpg'" @click="emitClick($event)"/>
          </div>
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
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/ubuntu/reseau_internet.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Cliquez sur l'icône paramètre du réseau que vous utilisez <span class="italic">(Wi-Fi ou Filaire)</span>.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/ubuntu/wifi_ethernet.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Rendez-vous dans l'onglet <span class="italic underline">IPv4</span> et rentrez les addresses IP des DNS que vous avez choisi.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/ubuntu/dns_IPv4.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Faites de même pour <span class="italic underline">l’IPv6</span>  si vous le souhaitez.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/ubuntu/dns_IPv6.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li>
          Pour terminer cliquez sur <span class="italic underline">Appliquer</span> et fermez la dernière fenêtre.
          Vous venez de changer vos DNS!
        </li>
      </ol>
    </section>

    <section v-if="plateforme === 'freeboxos'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur FreeboxOS</p>
      <p class="text-[#2E2E2E] text-l p-6" :class="{ 'text-[#FFFFFF]': !theme }">
        Cette méthode présente l'avantage de permettre la configuration automatique du serveur DNS sur tous vos appareils utilisant cette Box, à moins que le DNS de l'appareil a été configuré manuellement.
      </p>
      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Rendez vous sur la page de configuration de la passerelle: <a class="italic underline" href="http://mafreebox.freebox.fr" target="about:blank">mafreebox.freebox.fr</a> ou via son addresse IP (<span class="italic">192.168.1.254</span> par défaut).
        </li>
        <li class="mt-10">
          Vous atteignez la page de connexion. Utilisez votre mot de passe FreeboxOS. Si vous ne le connaissez pas, suivez la procédure "J'ai perdu mon mot de passe".
          <div class="max-w-4xl mx-auto my-10">
           <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/freeboxos/login.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Double-cliquez sur "Paramètre de la Freebox".
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/freeboxos/settings.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Une fenêtre vient de s'ouvrir, sélectionnez l'onglet "Mode avancé", puis double-cliquez sur "DHCP".
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/freeboxos/settings_dhcp_btn.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Supprimez les valeurs par défaut de la catégorie "DNS" si nécessaire, puis ajoutez jusqu'à 5 serveurs de résolution.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/freeboxos/dns_ipv4.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Enregistrez les modifications en cliquant sur le bouton "OK".
        </li>
        <li class="mt-10">
          Double-cliquez sur "Configuration IPv6".
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/freeboxos/settings_ipv6_btn.png'" @click="emitClick($event)"/>
          </div>
          </li>
        <li class="mt-10">
          Une fenêtre vient de s'ouvrir, sélectionnez l'onglet "DNS IPv6", cochez "Forcer l'utilisation de serveurs DNS IPv6 personnalisés". Ajoutez ensuite deux serveurs de résolution.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/freeboxos/dns_ipv6.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Enregistrez les modifications en cliquant sur le bouton "OK".
        </li>
        <li class="mt-10">
          Les appareils du réseau seront automatiquement configurés avec ces nouveaux serveurs DNS dès qu'ils récupéreront à nouveau leur adresse IP auprès de la Freebox. Cela peut prendre plusieurs heures. Souvent un redémarrage des appareils accélère le processus.
        </li>
      </ol>
    </section>
    <section v-if="plateforme === 'firefox-doh'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Firefox</p>
      <p class="text-[#2E2E2E] text-l p-6" :class="{ 'text-[#FFFFFF]': !theme }">
        En configurant Firefox de cette manière, en plus d'utiliser un serveur de résolution DNS autre que celui de votre FAI, la communication entre vous et le serveur DNS sera chiffré (via HTTPS). L'opération reste donc intéressant même si le système est déjà configuré pour utiliser un DNS non-menteur. Cette configuration n'aura d'incidence que sur Firefox.
      </p>
      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10 ">
          Lancez Firefox puis ouvrez les paramètres de celui-ci.
          <div class="max-w-4xl mx-auto my-10">
            <div class="max-w-4xl mx-auto my-10">
              <img class="mx-auto" :src="'/firefox_doh/goto_settings.png'" @click="emitClick($event)"/>
            </div>
          </div>
          
        </li>
        <li class="mt-10">
          A la fin de la catégorie "General" ("Network Settings"), cliquez sur le bouton "Settings..."
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/firefox_doh/goto_network_settings.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Cochez "Enable DNS over HTTPS", puis sélectionnez le fournisseur que vous souhaitez, si aucun ne vous convient, sélectionnez "Custom", puis entrez son adresse DoH dans le champ. Enregistrez les modifications avec le bouton "OK". 
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/firefox_doh/network_settings.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Vous venez de changer le serveur DNS utilisé par Firefox !
        </li>
      </ol>
    </section>
    <section v-if="plateforme === 'thunderbird-doh'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Thunderbird</p>
      <p class="text-[#2E2E2E] text-l p-6" :class="{ 'text-[#FFFFFF]': !theme }">
        En configurant Thunderbird de cette manière, en plus d'utiliser un serveur de résolution DNS autre que celui de votre FAI, la communication entre vous et le serveur DNS sera chiffré (via HTTPS). L'opération reste donc intéressant même si le système est déjà configuré pour utiliser un DNS non-menteur. Cette configuration n'aura d'incidence que sur Thunderbird.
      </p>
      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10 ">
          Lancez Thunderbird puis ouvrez les paramètres de celui-ci.
          <div class="max-w-4xl mx-auto my-10">
            <div class="max-w-4xl mx-auto my-10">
              <img class="mx-auto" :src="'/thunderbird_doh/goto_settings.png'" @click="emitClick($event)"/>
            </div>
          </div>
          
        </li>
        <li class="mt-10">
          Dans la catégorie "Général" ("Réseau et espace disque"), cliquez sur le bouton "Paramètres..."
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/thunderbird_doh/goto_network_settings.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Cochez "Activer le DNS via HTTPS", puis entrez l'adresse DoH dans le champ. Enregistrez les modifications avec le bouton "OK". 
          <div class="max-w-4xl mx-auto my-10">
            <img class="mx-auto" :src="'/thunderbird_doh/network_settings.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Vous venez de changer le serveur DNS utilisé par Thunderbird !
        </li>
      </ol>
    </section>
    <section v-if="plateforme === 'edge-doh'">
      <p class="text-[#2E2E2E] text-4xl font-bold" :class="{ 'text-[#FFFFFF]': !theme }">Changez les DNS sur Microsoft Edge</p>
      <p class="text-[#2E2E2E] text-l p-6" :class="{ 'text-[#FFFFFF]': !theme }">
        En configurant Edge de cette manière, en plus d'utiliser un serveur de résolution DNS autre que celui de votre FAI, la communication entre vous et le serveur DNS sera chiffré (via HTTPS). L'opération reste donc intéressant même si le système est déjà configuré pour utiliser un DNS non-menteur. Cette configuration n'aura d'incidence que sur Edge.
      </p>
      <ol class="list-decimal text-[#2E2E2E] mt-12 mx-2 md:mx-8" :class="{ 'text-[#FFFFFF]': !theme }">
        <li class="mt-10">
          Lancez Edge puis ouvrez les paramètres de celui-ci.
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/edge_doh/goto_settings.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Dans la catégorie "Privacy, search and services", cherchez "Use secure DNS to specify how to lookup the network address for websites". Cochez "Choose a service provider"", puis sélectionnez le fournisseur que vous souhaitez, si aucun ne vous convient, entrez l'adresse DoH manuellement dans le champ en ajoutant "{?dns}" à la fin. Enregistrez les modifications avec le bouton "OK". 
          <div class="max-w-4xl mx-auto my-10">
            <img class="w-auto rounded-xl mx-auto my-10 object-contain" :src="'/edge_doh/doh_settings.png'" @click="emitClick($event)"/>
          </div>
        </li>
        <li class="mt-10">
          Vous venez de changer le serveur DNS utilisé par Edge !
        </li>
      </ol>
    </section>

    <p class="text-[#2E2E2E] text-xl p-6 font-medium" :class="{ 'text-[#FFFFFF]': !theme }">
      Après avoir effectué la modification de vos DNS, il est nécessaire de procéder à une déconnexion suivie d'une reconnexion à Internet pour que les changements prennent effet. Vous pouvez cliquer sur le bouton situé en haut du site afin de vérifier si vous êtes toujours exposé aux risques des DNS menteurs !
    </p>

  </div>
</template>