<!-- Flag.svelte -->
<script>
    import { language } from '../helpers/languageStore'
    import { languages } from '../helpers/languages'

    export let currentLanguage
    // Function to change language
    function setLanguage(lang) {
        language.set(lang)
    }
</script>

<div>
    <div class="dropdown">
        <a href="#" class="dropbtn">
            <img
                src={languages[currentLanguage].flag}
                alt="English"
                class="flag"
            /></a
        >

        <ul class="dropdown-content">
            {#each Object.keys(languages) as lang}
                <li>
                    <a href="#" on:click={() => setLanguage(lang)}>
                        <img
                            src={languages[lang].flag}
                            alt={languages[lang].name}
                            class="flag"
                        />
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .flag {
        width: 30px;
        height: 20px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
        margin-right: 10px;
    }

    .dropdown {
        list-style: none;
        position: relative;
        display: inline-block;
    }

    .dropdown:hover .dropdown-content {
        display: block;
        flex-direction: column;
        align-items: center;
    }

    .dropdown-content {
        display: none;
        list-style: none;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        width: 60px;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
        border-radius: 2px;
        text-align: center;
    }

    .dropdown-content li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 12px 0;
        background-color: transparent;
        padding-right: 20px;
    }

    .dropdown-content a {
        color: white;
        padding: 0;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .dropdown-content img {
        width: 30px;
        height: 20px;
        display: block;
    }

    .dropdown-content a:hover {
        background-color: #575757;
    }
</style>
