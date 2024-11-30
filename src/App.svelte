<script>
// @ts-nocheck

    import { writable } from 'svelte/store'
    import { language } from './helpers/languageStore.js'
    ////
    import NavBar from './components/Navbar.svelte'
    import Hero from './components/Hero.svelte'
    import Mission from './components/Mission.svelte'
    import History from './components/History.svelte'
    import OurPartners from './components/OurPartners.svelte'
    import Progress from './components/Progress.svelte'
    import Footer from './components/Footer.svelte'
    import Activities from './components/Activities.svelte'
    import WorldMap from './components/WorldMap.svelte'
    import Video from './components/Video.svelte'
    ///
    let currentLanguage
    language.subscribe((value) => {
        currentLanguage = value
    })
</script>

<main>
    <NavBar {currentLanguage} />
    <Hero {currentLanguage} />
    <Mission {currentLanguage} />
    <History {currentLanguage} />
    <Video {currentLanguage} />
    <Activities {currentLanguage} />
    <WorldMap {currentLanguage}/>
    <OurPartners {currentLanguage} />
    <Progress />
    <Footer {currentLanguage} />
</main>

<style>
</style>
