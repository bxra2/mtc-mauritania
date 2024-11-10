<script>
    import { writable } from 'svelte/store'
    import { language } from './helpers/languageStore.js'
    ////
    import NavBar from './components/Navbar.svelte'
    import History from './components/History.svelte'
    import Telecom from './components/Telecom.svelte'
    import OurPartners from './components/OurPartners.svelte'
    import Footer from './components/Footer.svelte'
    import Activities from './components/Activities.svelte'
    ///
    let currentLanguage
    language.subscribe((value) => {
        currentLanguage = value
    })
</script>

<main>
    <NavBar {currentLanguage} />
    <History {currentLanguage} />
    <Activities {currentLanguage} />
    <Telecom {currentLanguage} />
    <OurPartners {currentLanguage} />
    <Footer {currentLanguage} />
</main>

<style>
</style>
