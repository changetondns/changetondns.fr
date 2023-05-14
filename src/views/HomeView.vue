<script setup>
import Tutorial from '../components/Tutorial.vue'
</script>

<script>
import moon from '../assets/moon.svg'

export default {
  data() {
    return {
      moon,
      dnsServers: [],
      userIp: null
    }
  },
  
}


</script>



<template>
  <main class="font-['inter']">
    <img :src="moon" class="absolute right-0 p-4 w-18"/>

    <section class="mx-4 h-auto md:h-screen min-h-[800px] relative grid grid-cols-1 gap-1">
      <!-- Titre -->
      <div>
        <div class="flex flex-wrap w-fit max-w-sm sm:max-w-full m-auto mt-24">
          <p class="text-[#345BC1] text-[64px] font-semibold mx-auto sm:mx-3 text-center">Change ton</p>
          <div class="relative inline-block w-fit mx-auto">
            <p class="text-[#345BC1] text-[64px] font-semibold z-10 relative">DNS</p>
            <div class="absolute transform -rotate-6 -translate-y-full bg-[#FF9696] w-36 h-20 z-5"></div>
          </div>
        </div>
        
        <p class="text-[#5E5E5E] text-lg text-center mt-2">Evitons la censure !</p>
        
      </div>
      
      <!-- DNS check -->
      <div>
        <div class="w-fit mx-auto mt-14">
          <button type="button" class="text-white bg-[#345BC1] rounded px-4 py-3 text-2xl" style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
          Cliquez içi pour vérifier votre DNS
          </button>
        </div>

        <p class="text-[#5E5E5E] text-center text-2xl max-w-2xl mx-auto mt-8">
          En cliquant sur le bouton, vous pourrez vérifier votre DNS et savoir si vous êtes soumis à la censure d'internet.
        </p>
      </div>

      <!-- bulle d'info-->
      <div class="max-w-3xl bg-[#2E2D39] p-4 rounded-lg mx-auto relative h-fit mt-12">
        <p class="absolute text-white text-8xl right-0 -translate-y-[70%] translate-x-[10px] rotate-12 select-none" style="-webkit-text-stroke: 2px #2E2D39;">!</p>
        <p class="text-white text-center text-2xl">
          En changeant vos DNS, vous pouvez contourner les blocages de sites web imposés par la police via les DNS par défaut des fournisseurs d'accès internet, et ainsi gagner en liberté sur internet.
        </p>
      </div>
      
    </section>

    <section class="mx-auto w-3/4 md:-translate-y-5 mt-12 md:mt-0">
      <!-- selection de la plateforme-->
      <div class="block md:flex">
        <p class="mr-3 text-xl text-[#2E2E2E] my-auto">Je veux changer de DNS sur :</p>
        <div class="border-solid border-2 border-[#8B8B8B] px-2 py-1 rounded-md w-fit">
          <select class="text-[#8B8B8B] text-xl" id="plateform-select">
            <option value="w-11">Windows 11</option>
            <option value="w-10">Windows 10</option>
            <option value="mac">Mac</option>
            <option value="android">Android</option>
            <option value="ios">Ios</option>
          </select>
        </div>
      </div>

      <div class="w-full rounded rounded-lg bg-[#C8D7E0] p-4 mt-8 overflow-x overflow-scroll">
        <div class="min-w-[800px]">
          <p>lol</p>
        </div>
        
      </div>

      <div class="w-11/12 mt-8 mx-auto overflow-x overflow-scroll rounded-lg">
        <div class="min-w-[800px]">
          <div class="rounded rounded bg-[#C5C5C5] p-2">
            <p class="text-lg text-[#2E2E2E]">Liste de serveur DNS</p>
          </div>

          <table class="table-auto overflow-scroll w-full mt-2">
            <thead class="text-[#363636]">
              <tr>
                <th class="text-left">Nom</th>
                <th class="text-left">IP</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-xl text-black font-medium">
                <td class="pl-2">Google DNS</td>
                <td class="pl-2">8.8.8.8 / 8.8.4.4</td>
                <td class="pl-2 max-w-lg">Le DNS de Google est fiable mais peut être sujet à la censure, avec des préoccupations concernant la vie privée des utilisateurs.</td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>
      



    </section>
    <Tutorial />
  </main>
</template>
