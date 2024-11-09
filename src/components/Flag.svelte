<!-- Flag.svelte -->
<script>
    import { language } from '../languageStore'

    // Function to change language
    function setLanguage(lang) {
        language.set(lang)
    }
</script>

<div>
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
        alt="English"
        class="flag"
        on:click={() => setLanguage('en')}
    />
    <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
        alt="Français"
        class="flag"
        on:click={() => setLanguage('fr')}
    />
</div>

<style>
    .flag {
        width: 30px;
        height: 20px;
        cursor: pointer;
        margin-right: 10px;
    }
</style>
