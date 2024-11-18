<script>
    import { writable } from 'svelte/store'
    import { language } from './helpers/languageStore.js'
    ////
    import NavBar from './components/Navbar.svelte'
    import Hero from './components/Hero.svelte'
    import History from './components/History.svelte'
    import Telecom from './components/Telecom.svelte'
    import OurPartners from './components/OurPartners.svelte'
    import Progress from './components/Progress.svelte'
    import Footer from './components/Footer.svelte'
    import Footerr from './components/Footerr.svelte'
    import Activities from './components/Activities.svelte'
    ///
    let currentLanguage
    language.subscribe((value) => {
        currentLanguage = value
    })
</script>

<main>
    <NavBar {currentLanguage} />
    <Hero />
    <History {currentLanguage} />
    <Activities {currentLanguage} />
    <Telecom {currentLanguage} />
    <OurPartners {currentLanguage} />
    <Progress />
    <Footerr {currentLanguage}/>
</main>

<style>
</style>
