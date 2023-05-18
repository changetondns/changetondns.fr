<script setup>
import Tutorial from '../components/Tutorial.vue'
import ImageViewer from '../components/Image.vue'
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
            selectedPlatform: 'w-11',
            dns_user: null,
            loading: false,
            error: '',
            image: '',
        }
    },

    methods: {
        show_image(image) {
            this.image = image
        },

        genHash(longueur) {
            let caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            let texte = '';

            for (let i = 0; i < longueur; i++) {
                let caractereAleatoire = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
                texte += caractereAleatoire;
            }

            return texte;
        },

        getFai() {
            if (this.dns_user == null) {
                return false
            }

            let is_fai = false
            let searchString = this.dns_user.name.toLowerCase();
            let keywords = ['bouygues', 'free sas', 'sfr', 'orange'];

            for (let i = 0; i < keywords.length; i++) {
                if (searchString.includes(keywords[i])) {
                    is_fai = true;
                    break;
                }
            }

            return is_fai
        },

        startDns() {
            this.error = ''
            if (!this.loading) {
                this.loading = true
                setTimeout(() => {
                    this.dns();
                }, 20);
            }
        },

        dns() {
            let hash = this.genHash(40)

            axios.get(`https://${hash}-1.ipleak.net/dnsdetection/`)
                .then((res) => {
                    let ips = Object.keys(res.data.ip);
                    if (ips.length === 0) {
                        this.loading = false;
                        this.dns_user = null;
                        this.error = "Votre DNS est inconnu, si vous n'avez jamais changé de DNS alors vous devez être vulnérable."
                        return
                    }
                    let ip = ips[ips.length - 1];
                    axios.get(`https://ipleak.net/json/${ip}`, {timeout: 10_000})
                        .then((res) => {
                            if ('error' in res.data) {
                                axios.get(`http://ip-api.com/json/${ip}`, {timeout: 10_000})
                                    .then((res) => {
                                        if (res.data.ips === '') {
                                            this.loading = false;
                                            this.dns_user = null;
                                            this.error = "Votre DNS est inconnu, si vous n'avez jamais changé de DNS alors vous devez être vulnérable."
                                        } else {
                                            if (res.data.isp.includes("SFR")) {
                                                res.data.isp = "SFR"
                                            }
                                            this.dns_user = {
                                                'name': res.data.isp,
                                                'ip': res.data.query,
                                            };
                                            this.loading = false;
                                        }
                                    }).catch(err => console.log(err))
                            } else {
                                if (res.data.isp_name.includes("SFR")) {
                                    res.data.isp_name = "SFR"
                                }
                                this.dns_user = {
                                    'name': res.data.isp_name,
                                    'ip': res.data.ip,
                                };
                                this.loading = false;
                            }
                        }).catch(err => console.log(err))
                })
                .catch((err) => {
                    this.loading = false;
                    this.dns_user = null;
                    this.error = "L'api est offline ou vous n'avez plus de connexion. Veuillez retenter dans quelques secondes."
                    console.log(err)
                });
        }
    }
}
</script>

<style>
.custom-select option {
    background-color: #25292c !important;
    color: #e0e0e0 !important;
}
</style>

<template>
    <ImageViewer :theme="light_theme" :image="image" @hidden="image = ''" v-if="image != ''" />

    <main class="" :class="{ 'bg-[#161818]': !light_theme, 'bg-transition': true }">
        <section class="h-auto md:h-screen min-h-[800px] relative grid grid-cols-1 gap-1">
            <div class="p-4 w-full h-18">
                <img class="w-8 h-8 ml-auto" :src="moon" v-if="light_theme" @click="light_theme = !light_theme" />
                <img class="w-8 h-8 ml-auto" :src="sun" v-else @click="light_theme = !light_theme" />
            </div>

            <!-- Titre -->
            <div>
                <div class="flex flex-wrap w-fit max-w-sm sm:max-w-full m-auto">
                    <p class="text-[#345BC1] text-[64px] font-semibold mx-auto sm:mx-3 text-center">Change ton</p>
                    <div class="relative inline-block w-fit mx-auto">
                        <p class="text-[#345BC1] text-[64px] font-semibold z-10 relative">DNS</p>
                        <div class="absolute transform -rotate-6 -translate-y-[5.3rem] -translate-x-1 bg-[#FF9696] w-36 h-20 z-5"></div>
                    </div>
                </div>

                <p class="text-[#5E5E5E] text-lg text-center mt-2" :class="{ 'text-[#F9F9F9]': !light_theme }">Évitons la censure !</p>

            </div>

            <!-- DNS check -->
            <div>
                <div class="w-fit mx-auto mt-14">
                    <button type="button" class="text-white bg-[#345BC1] rounded px-4 py-3 mx-2 text-2xl"
                            style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);" @click="startDns">
                        Cliquez ici pour vérifier votre DNS
                    </button>
                </div>

                <div class="min-h-[200px] mt-8">
                    <p class="text-[#5E5E5E] text-center text-2xl max-w-2xl mx-auto"
                       :class="{ 'text-[#F9F9F9]': !light_theme }" v-if="dns_user == null && !loading && error == ''">
                        En cliquant sur le bouton, vous pourrez vérifier votre DNS et savoir si vous êtes soumis à la
                        censure d'internet.
                    </p>
                    <div class="lds-facebook mx-auto relative" v-if="loading">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <p class="text-[#5E5E5E] text-center text-2xl max-w-2xl mx-auto"
                       :class="{ 'text-[#F9F9F9]': !light_theme }" v-if="error != ''">
                        {{ error }}
                    </p>

                    <div v-show="dns_user && !loading && error == ''">
                        <div class="flex flex-nowrap max-w-xl mx-auto">
                            <div class="mx-auto">
                                <p class="text-[#1E1E1E] text-center text-2xl font-bold"
                                   :class="{ 'text-white': !light_theme}">Fournisseur</p>
                                <p class="text-[#686868] text-center text-xl font-medium overflow-hidden truncate max-w-[200px]"
                                   :class="{ 'text-[#9A9A9A]': !light_theme }">{{ dns_user ? dns_user.name : '' }}</p>
                            </div>
                            <div class="mx-auto">
                                <p class="text-[#1E1E1E] text-center text-2xl font-bold"
                                   :class="{ 'text-white': !light_theme }">Serveur DNS</p>
                                <p class="text-[#686868] text-center text-xl font-medium overflow-hidden truncate max-w-[200px]"
                                   :class="{ 'text-[#9A9A9A]': !light_theme }">{{ dns_user ? dns_user.ip : '' }}</p>
                            </div>
                        </div>

                        <p class="text-[#EC0000] text-center text-2xl max-w-2xl mx-auto font-medium mt-4"
                           :class="{ 'text-[#F55C5C]': !light_theme }" v-if="getFai()">
                            Vulnérable
                        </p>
                        <p class="text-[#21FF1D] text-center text-2xl max-w-2xl mx-auto font-medium mt-4"
                           :class="{ 'text-[#85FC82]': !light_theme }" v-else>
                            Non Vulnérable
                        </p>

                    </div>

                </div>
            </div>

            <!-- bulle d'info-->
            <div class="mx-4">
                <div class="max-w-3xl bg-[#2E2D39] p-4 rounded-lg mx-auto relative h-fit mt-12"
                    :class="{ 'bg-[#8591FA]': !light_theme }">
                    <p class="absolute text-white text-8xl right-0 -translate-y-[70%] translate-x-[10px] rotate-12 select-none border-alert-1"
                    :class="{ 'border-alert-2': !light_theme }">!</p>
                    <p class="text-white text-center text-2xl">
                        En changeant vos DNS, vous pouvez contourner les blocages de sites web imposés par la police via les
                        DNS par défaut fournis  par les fournisseurs d'accès internet, et ainsi gagner en liberté sur internet.
                    </p>
                </div>
            </div>

        </section>

        <section class="mx-auto w-11/12 md:w-3/4 pt-8 md:mt-0">
            <p class="text-[#1C1C1C] font-bold text-2xl mt-24" :class="{ 'text-white': !light_theme }">Qu’est ce qu’un
                Domain Name Server (DNS) ?</p>
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
                Sans le DNS, vous auriez dû entrer l'adresse IP numérique pour accéder à chaque site Web que vous voulez
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
                Le DNS menteur est une pratique utilisée par les fournisseurs d'accès à Internet (FAI) pour restreindre
                l'accès à certains sites web. Cette technique consiste à manipuler les réponses DNS afin de rediriger
                vos requêtes vers une adresse IP différente de celle attendue pour accéder au site censuré. Cette
                redirection peut être effectuée vers une page d'erreur standard ou vers un message indiquant que le site
                est inaccessible ou inexistant.
                <br/><br/>
                L'utilisation du DNS menteur est souvent mise en place par les FAI en réponse à des obligations légales
                ou des pressions gouvernementales. Dans le cas mentionné, l'État français impose cette pratique aux FAI
                dans le but de bloquer l'accès à certains sites web qu'il juge inappropriés, illégaux.
            </p>
        </section>


        <section class="mx-auto w-11/12 md:w-3/4 pt-8 mt-24">
            <!-- selection de la plateforme-->
            <div class="block md:flex">
                <p class="mr-3 text-xl text-[#2E2E2E] my-auto" :class="{ 'text-[#FFFFFF]': !light_theme }">Je veux changer de DNS sur</p>
                <div class="border-solid border-2 border-[#8B8B8B] px-2 py-1 rounded-md w-fit"
                     :class="{ 'border-[#CFCFCF]': !light_theme }">
                    <select class="text-[#8B8B8B] text-xl outline-none bg-transparent" id="plateform-select"
                            :class="{ 'text-[#CFCFCF] custom-select': !light_theme }" v-model="selectedPlatform">
                        <option selected value="w-11">Windows 11</option>
                        <option value="w-10">Windows 10</option>
                        <option value="mac">macOS</option>
                        <option value="android-new">Android 9.0 Pie ou +</option>
                        <option value="android-old">Android</option>
                        <option value="ios">IOS</option>
                    </select>
                </div>
            </div>

            <div class="w-full rounded rounded-lg p xl:p-4 mt-2 overflow-x-auto shadow-none shadow-[#18191A]" :class="{ 'shadow-md bg-[#1F2126]': !light_theme , 'bg-[#C8D7E0]': light_theme }">
                <Tutorial :plateforme="selectedPlatform" :theme="light_theme" @show_image="show_image"/>
            </div>

            <div class="w-11/12 mt-8 mx-auto">
                <div class="rounded-t px-2 py-4 border-x border-t border-[#d0d0d0]"
                     :class="{ 'bg-[#1C1E1E]  border-black': !light_theme, 'bg-[#e2e2e2]': light_theme }">
                    <p class="text-lg text-[#161818] font-bold px-2" :class="{ 'text-[#F1F1F1]': !light_theme }">Liste
                        de serveur DNS</p>
                </div>

                <div class="overflow-x-auto rounded-b-lg border-b border-[#d0d0d0]"
                     :class="{ 'border-black': !light_theme }">
                    <table class="table-auto overflow-scroll w-full min-w-[800px]">
                        <thead class="text-[#161818]" :class="{ 'text-white bg-[#1C1E1E]': !light_theme, 'bg-[#e2e2e2]': light_theme }">
                        <tr>
                            <th class="text-left pl-4 py-2 border border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">Nom
                            </th>
                            <th class="text-left pl-4 border border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">Adresses IPv4
                            </th>
                            <th class="text-left pl-4 border border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">Adresses IPv6
                            </th>
                            <th class="text-left pl-4 border border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">Description
                            </th>
                        </tr>
                        </thead>
                        <tbody class="text-xl" :class="{ 'text-[#FFFFFF]': !light_theme, 'text-black': light_theme }">
                        <tr :class="{ 'hover:bg-[#1C1E1E]': !light_theme, 'hover:bg-[#E3E3E3]': light_theme }">
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                <a href="https://developers.cloudflare.com/1.1.1.1/setup/" target="_blank" class="text-blue-400">Cloudflare</a>
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                1.1.1.1<br/>
                                1.0.0.1
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                2606:4700:4700::1111<br/>
                                2606:4700:4700::1001
                            </td>
                            <td class="pl-2 max-w-lg py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                Connu pour être un DNS très fiable, performant et respectueux de la vie privée.
                            </td>
                        </tr>

                        <tr :class="{ 'hover:bg-[#1C1E1E]': !light_theme, 'hover:bg-[#E3E3E3]': light_theme }">
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                <a href="https://developers.google.com/speed/public-dns/docs/using?hl=fr" target="_blank" class="text-blue-400">Google DNS</a>
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                8.8.8.8<br/>
                                8.8.4.4
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                2001:4860:4860::8888<br/>
                                2001:4860:4860::8844
                            </td>
                            <td class="pl-2 max-w-lg py-4 border-t border-x border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                Réputé pour sa fiabilité et ses performances, bien que le respect de la vie privée
                                puisse être remis en question.
                            </td>
                        </tr>

                        <tr :class="{ 'hover:bg-[#1C1E1E]': !light_theme, 'hover:bg-[#E3E3E3]': light_theme }">
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                <a href="https://www.quad9.net/fr/" target="_blank" class="text-blue-400">Quad9</a>
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                9.9.9.9<br/>
                                149.112.112.112
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                2620:fe::fe<br/>
                                2620:fe::9
                            </td>
                            <td class="pl-2 max-w-lg py-4 border-t border-x border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                Offre un DNS fiable avec des filtres de sécurité pour éviter l'accès à des sites
                                dangereux.
                            </td>
                        </tr>

                        <tr :class="{ 'hover:bg-[#1C1E1E]': !light_theme, 'hover:bg-[#E3E3E3]': light_theme }">
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                <a href="https://www.fdn.fr/actions/dns/" target="_blank" class="text-blue-400">FDN</a>
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                80.67.169.12<br/>
                                80.67.169.40
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                2001:910:800::12<br/>
                                2001:910:800::40
                            </td>
                            <td class="pl-2 max-w-lg py-4 border-t border-x border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                Créé par une association française dans le but de lutter contre la censure sur internet.
                            </td>
                        </tr>

                        <tr :class="{ 'hover:bg-[#1C1E1E]': !light_theme, 'hover:bg-[#E3E3E3]': light_theme }">
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                <a href="https://www.opendns.com/" target="_blank" class="text-blue-400">Open DNS</a>
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                208.67.222.222<br/>
                                208.67.220.220
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                2620:119:35::35<br/>
                                2620:119:53::53
                            </td>
                            <td class="pl-2 max-w-lg py-4 border-t border-x border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                Réputé pour sa rapidité et son absence de censure.
                            </td>
                        </tr>
                        
                        <tr :class="{ 'hover:bg-[#1C1E1E]': !light_theme, 'hover:bg-[#E3E3E3]': light_theme }">
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                <a href="https://adguard-dns.io/fr/welcome.html" target="_blank" class="text-blue-400">AdGuard</a>
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                94.140.14.14<br/>
                                94.140.15.15
                            </td>
                            <td class="pl-2 py-4 border-x border-t border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                2620:119:35::35<br/>
                                2a10:50c0::ad2:ff
                            </td>
                            <td class="pl-2 max-w-lg py-4 border-t border-x border-[#d0d0d0]"
                                :class="{ 'border-black': !light_theme }">
                                AdGuard DNS est un service populaire sur iOS pour bloquer les publicités et les traqueurs. Il garantit la confidentialité en ne conservant pas les données de navigation.
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
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