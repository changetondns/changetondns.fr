<script setup>
import Tutorial from '../components/Tutorial.vue'
</script>

<script>
import moon from '../assets/moon.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import sun from '../assets/sun.svg'
import shema_black from '../assets/shema_black.svg'
import shema_white from '../assets/shema_white.svg'
import axios from 'axios'

export default {
    data() {
        return {
            moon,
            sun,
            github,
            twitter,
            shema_white,
            shema_black,
            light_theme: true,
        }
    },
    methods: {
        dns() {
            // TODO generate random value for the ids

            const id1 = 7890001478371854
            const id2 = 5798210465243758
            axios.get('http://' + id1 + "" + id2 + '.edns.ip-api.com/json').then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
            // change to the client ip
            axios.get("http://ip-api.com/json/92.184.96.99?fields=62464").then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }

    }

}
</script>

<template>
    <main :class="{ 'bg-[#161818]': !light_theme, 'bg-transition': true }">
        <div class="flex float-right p-4 w-18 h-18" @click="light_theme = !light_theme">
            <img class="w-8 h-8" :src="moon" v-if="light_theme"/>
            <img class="w-8 h-8" :src="sun" v-else/>
        </div>

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

                <p class="text-[#5E5E5E] text-lg text-center mt-2" :class="{ 'text-[#F9F9F9]': !light_theme }">Évitons
                    la censure !</p>

            </div>

            <!-- DNS check -->

            <div>
                <div class="w-fit mx-auto mt-14">
                    <button type="button" class="text-white bg-[#345BC1] rounded px-4 py-3 text-2xl"
                            style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);" @click="dns">
                        Cliquez içi pour vérifier votre DNS
                    </button>
                </div>

                <p class="text-[#5E5E5E] text-center text-2xl max-w-2xl mx-auto mt-8"
                   :class="{ 'text-[#F9F9F9]': !light_theme }">
                    En cliquant sur le bouton, vous pourrez vérifier votre DNS et savoir si vous êtes soumis à la
                    censure d'internet.
                </p>
            </div>

            <!-- bulle d'info-->
            <div class="max-w-3xl bg-[#2E2D39] p-4 rounded-lg mx-auto relative h-fit mt-12"
                 :class="{ 'bg-[#8591FA]': !light_theme }">
                <p class="absolute text-white text-8xl right-0 -translate-y-[70%] translate-x-[10px] rotate-12 select-none border-alert-1"
                   :class="{ 'border-alert-2': !light_theme }">!</p>
                <p class="text-white text-center text-2xl">
                    En changeant vos DNS, vous pouvez contourner les blocages de sites web imposés par la police via les
                    DNS par défaut des fournisseurs d'accès internet, et ainsi gagner en liberté sur internet.
                </p>
            </div>

        </section>

        <section class="mx-auto w-3/4 md:-translate-y-5 mt-12 md:mt-0">
            <!-- selection de la plateforme-->
            <div class="block md:flex">
                <p class="mr-3 text-xl text-[#2E2E2E] my-auto" :class="{ 'text-[#FFFFFF]': !light_theme }">Je veux
                    changer de DNS sur :</p>
                <div class="border-solid border-2 border-[#8B8B8B] px-2 py-1 rounded-md w-fit"
                     :class="{ 'border-[#CFCFCF]': !light_theme }">
                    <select class="text-[#8B8B8B] text-xl outline-none" id="plateform-select"
                            :class="{ 'text-[#CFCFCF] bg-[#161818]': !light_theme }">
                        <option value="w-11">Windows 11</option>
                        <option value="w-10">Windows 10</option>
                        <option value="mac">Mac</option>
                        <option value="android">Android</option>
                        <option value="ios">IOS</option>
                    </select>
                </div>
            </div>

            <div class="w-full rounded rounded-lg bg-[#C8D7E0] p-4 mt-8 overflow-x-auto shadow-none shadow-[#18191A]"
                 :class="{ 'shadow-md bg-[#1F2126]': !light_theme }">
                <Tutorial/>
            </div>

            <div class="w-11/12 mt-8 mx-auto rounded-lg">
                <div class="rounded rounded bg-[#C5C5C5] p-2" :class="{ 'bg-[#4E5DE0]': !light_theme }">
                    <p class="text-lg text-[#2E2E2E]" :class="{ 'text-[#D2D2D2]': !light_theme }">Liste de serveur
                        DNS</p>
                </div>

                <div class="overflow-x-auto">
                    <table class="table-auto overflow-scroll w-full mt-2 min-w-[800px]">
                        <thead class="text-[#363636]" :class="{ 'text-[#D2D2D2]': !light_theme }">
                        <tr>
                            <th class="text-left">Nom</th>
                            <th class="text-left">IP</th>
                            <th class="text-left">Description</th>
                        </tr>
                        </thead>
                        <tbody class="text-xl text-black font-medium" :class="{ 'text-[#FFFFFF]': !light_theme }">
                        <tr>
                            <td class="pl-2 pb-4">Google DNS</td>
                            <td class="pl-2 pb-4">8.8.8.8 / 8.8.4.4</td>
                            <td class="pl-2 max-w-lg pb-4">Le DNS de Google est fiable mais peut être sujet à la
                                censure, avec des préoccupations concernant la vie privée des utilisateurs.
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-2 pb-4">Google DNS</td>
                            <td class="pl-2 pb-4">8.8.8.8 / 8.8.4.4</td>
                            <td class="pl-2 max-w-lg pb-4">Le DNS de Google est fiable mais peut être sujet à la
                                censure, avec des préoccupations concernant la vie privée des utilisateurs.
                            </td>
                        </tr>
                        <tr>
                            <td class="pl-2 pb-4">Google DNS</td>
                            <td class="pl-2 pb-4">8.8.8.8 / 8.8.4.4</td>
                            <td class="pl-2 max-w-lg pb-4">Le DNS de Google est fiable mais peut être sujet à la
                                censure, avec des préoccupations concernant la vie privée des utilisateurs.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p class="text-[#1C1C1C] font-bold text-2xl mt-24" :class="{ 'text-white': !light_theme }">Qu’est ce qu’un
                Domaine Name Server (DNS) ?</p>
            <p class="mt-4 ml-4 max-w-4xl text-[#424242] font-medium" :class="{ 'text-[#DBDBDB]': !light_theme }">
                Un Domain Name Server (DNS) est un système informatique qui permet de traduire les noms de domaines en
                adresses IP.
                <br/>
                <br/>
                Lorsque vous accédez à un site Web, vous tapez généralement son nom de domaine dans votre navigateur
                (par exemple, www.google.com). Le DNS est responsable de prendre ce nom de domaine et de le traduire en
                adresse IP, qui est l'adresse numérique unique qui identifie le serveur Web sur lequel se trouve le site
                Web.
                <br/>
                <br/>
                Sans le DNS, vous devriez entrer l'adresse IP numérique pour accéder à chaque site Web que vous voulez
                visiter, ce qui serait beaucoup plus difficile à mémoriser et à utiliser. En bref, le DNS est une sorte
                de traducteur qui permet à votre navigateur de trouver les sites Web que vous cherchez en utilisant
                leurs noms de domaines faciles à retenir.
            </p>

            <img class="min-[2000px]:absolute min-[2000px]:-translate-y-2/3 relative mx-auto mt-12 right-0 w-4/6 min-w-[19rem] max-w-lg"
                 :src="shema_black" v-if="light_theme"/>
            <img class="min-[2000px]:absolute min-[2000px]:-translate-y-2/3 relative mx-auto mt-12 right-0 w-4/6 min-w-[19rem] max-w-lg"
                 :src="shema_white" v-else/>

            <p class="text-[#1C1C1C] font-bold text-2xl mt-12" :class="{ 'text-white': !light_theme }">Qu’est ce qu’un
                DNS menteur ?</p>
            <p class="mt-4 ml-4 max-w-4xl text-[#424242] font-medium" :class="{ 'text-[#DBDBDB]': !light_theme }">
                Un DNS menteur, également connu sous le nom de DNS falsifié ou de DNS empoisonné, est un type d'attaque
                informatique dans laquelle un cybercriminel modifie intentionnellement les réponses d'un serveur DNS
                afin de rediriger les utilisateurs vers un site Web frauduleux ou malveillant.
                <br/><br/>
                Cela peut se produire lorsque le cybercriminel intercepte et modifie le trafic DNS en cours de route, ou
                lorsqu'il prend le contrôle d'un serveur DNS et modifie les enregistrements de zone pour diffuser des
                informations DNS incorrectes.
                <br/><br/>
                Lorsqu'un utilisateur accède à un site Web à partir d'un navigateur, le navigateur envoie une requête
                DNS pour résoudre le nom de domaine en adresse IP. Si le DNS est falsifié, le navigateur est redirigé
                vers un site Web frauduleux ou malveillant, ce qui peut entraîner des pertes financières, la perte de
                données personnelles ou d'autres conséquences négatives pour l'utilisateur.
            </p>
        </section>

        <section>
            <button class="flex w-fit mx-auto my-24 bg-[#345BC1] px-4 py-2 rounded-lg"
                    style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);"
                    onclick="window.location.href='https://twitter.com/intent/tweet?hashtags=changetondns'">
                <img :src="twitter" class="w-8 mr-2"/>
                <span class="text-white text-xl my-auto">Partage ce site</span>
            </button>

            <footer class="flex w-full bg-gradient-to-r from-[#FF6666] to-[#6070FF] p-3"
                    onclick="window.location.href='https://github.com/changetondns'">
                <img :src="github" class="w-6 mr-2"/>
                <p class="text-white text-md my-auto hover:underline underline-offset-1">2023 - Contribuer au code sur
                    github</p>
            </footer>
        </section>
    </main>
</template>

<style scoped>
.bg-transition {
    transition: background-color 0.3s ease-in-out;
}
</style>