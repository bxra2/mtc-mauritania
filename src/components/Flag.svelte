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
    <li class="dropdown">
        <a href="#" class="dropbtn">
            <img
                src={languages[currentLanguage].flag}
                alt="English"
                class="flag"
            /></a
        >

        <ul class="dropdown-content">
            <li>
                <a href="#" on:click={() => setLanguage('en')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                        alt="English"
                        class="flag"
                    /></a
                >
            </li>
            <li>
                <a href="#" on:click={() => setLanguage('fr')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"
                        alt="Français"
                        class="flag"
                    />
                </a>
            </li>
            <li><a href="#"></a></li>
        </ul>
    </li>
</div>

<style>
    .flag {
        width: 30px;
        height: 20px;
        cursor: pointer;
        margin-right: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6); /* Icon shadow */
    }
    .dropdown {
        list-style: none;

        position: relative;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content {
        display: none;
        list-style: none;
        position: absolute;
        background-color: #333;
        min-width: 60px;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
        background-color: #575757;
    }
</style>
