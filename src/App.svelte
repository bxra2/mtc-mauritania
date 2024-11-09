<script>
    import { writable } from 'svelte/store'
    import { language } from './languageStore.js'
    ////
    import NavBar from './components/Navbar.svelte'
    ///
    let currentLanguage
    language.subscribe((value) => {
        currentLanguage = value
    })
</script>

<main>
    <NavBar {currentLanguage} />
</main>

<style>
</style>
